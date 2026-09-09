import React, {useCallback, useEffect, useRef, useState} from 'react';
import {createPortal} from 'react-dom';
import styles from './styles.module.css';

const MAX_ZOOM = 8;
const CLICK_ZOOM = 2;
const WHEEL_SENSITIVITY = 0.0012;
export const ARTICLE_IMAGE_ITEM_SELECTOR = 'img:not([data-no-zoom]):not([alt=""])';
export const ARTICLE_IMAGE_SELECTOR = `.markdown ${ARTICLE_IMAGE_ITEM_SELECTOR}`;

type OpenImage = {
  alt: string;
  href?: string;
  src: string;
};

type Gallery = {
  images: OpenImage[];
  index: number;
};

type View = {
  zoom: number;
  pan: {x: number; y: number};
};

const initialView: View = {zoom: 1, pan: {x: 0, y: 0}};

export default function ImageLightbox() {
  const [mounted, setMounted] = useState(false);
  const [gallery, setGallery] = useState<Gallery | null>(null);
  const [view, setView] = useState<View>(initialView);
  const viewRef = useRef(view);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const dragging = useRef<{
    pointerId: number;
    startX: number;
    startY: number;
    panX: number;
    panY: number;
    moved: boolean;
  } | null>(null);
  const pointers = useRef(new Map<number, {x: number; y: number}>());
  const pinch = useRef<{distance: number; zoom: number} | null>(null);
  const ignoreClick = useRef(false);

  const updateView = useCallback((next: View) => {
    viewRef.current = next;
    setView(next);
  }, []);

  const resetView = useCallback(() => updateView(initialView), [updateView]);

  const close = useCallback(() => {
    setGallery(null);
    resetView();
    window.requestAnimationFrame(() => previousFocus.current?.focus());
  }, [resetView]);

  const navigate = useCallback((direction: -1 | 1) => {
    setGallery((current) => {
      if (!current || current.images.length < 2) return current;
      return {
        ...current,
        index: (current.index + direction + current.images.length) % current.images.length,
      };
    });
    resetView();
  }, [resetView]);

  const clampPan = useCallback((pan: {x: number; y: number}, zoom: number) => {
    const viewport = viewportRef.current;
    const image = imageRef.current;
    if (!viewport || !image) return {x: 0, y: 0};
    const maxX = Math.max(0, (image.offsetWidth * zoom - viewport.clientWidth) / 2);
    const maxY = Math.max(0, (image.offsetHeight * zoom - viewport.clientHeight) / 2);
    return {
      x: Math.min(maxX, Math.max(-maxX, pan.x)),
      y: Math.min(maxY, Math.max(-maxY, pan.y)),
    };
  }, []);

  const zoomAt = useCallback((requestedZoom: number, clientX?: number, clientY?: number) => {
    const viewport = viewportRef.current;
    const current = viewRef.current;
    const nextZoom = Math.min(MAX_ZOOM, Math.max(1, requestedZoom));
    if (!viewport || nextZoom === current.zoom) return;
    if (nextZoom === 1) {
      resetView();
      return;
    }

    const rect = viewport.getBoundingClientRect();
    const x = clientX ?? rect.left + rect.width / 2;
    const y = clientY ?? rect.top + rect.height / 2;
    const offsetX = x - (rect.left + rect.width / 2);
    const offsetY = y - (rect.top + rect.height / 2);
    const ratio = nextZoom / current.zoom;
    const pan = clampPan({
      x: offsetX - (offsetX - current.pan.x) * ratio,
      y: offsetY - (offsetY - current.pan.y) * ratio,
    }, nextZoom);
    updateView({zoom: nextZoom, pan});
  }, [clampPan, resetView, updateView]);

  useEffect(() => {
    setMounted(true);
    const handleDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      const target = event.target;
      if (!(target instanceof HTMLImageElement)) return;
      if (!target.matches(ARTICLE_IMAGE_SELECTOR)) return;
      event.preventDefault();
      event.stopPropagation();
      previousFocus.current = target;
      const article = target.closest('.markdown');
      const elements = article
        ? Array.from(article.querySelectorAll<HTMLImageElement>(ARTICLE_IMAGE_ITEM_SELECTOR))
        : [target];
      const images = elements.map((element) => ({
        src: element.currentSrc || element.src,
        alt: element.alt || 'Expanded article image',
        href: (element.closest('a[href]') as HTMLAnchorElement | null)?.href,
      }));
      setGallery({
        images,
        index: Math.max(0, elements.indexOf(target)),
      });
      updateView(initialView);
    };

    document.addEventListener('click', handleDocumentClick, true);
    return () => document.removeEventListener('click', handleDocumentClick, true);
  }, [updateView]);

  useEffect(() => {
    if (!gallery) return;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousBodyOverflow = document.body.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        if (viewRef.current.zoom > 1) resetView();
        else close();
      } else if (event.key === '+' || event.key === '=') {
        event.preventDefault();
        zoomAt(viewRef.current.zoom * 1.35);
      } else if (event.key === '-' || event.key === '_') {
        event.preventDefault();
        zoomAt(viewRef.current.zoom / 1.35);
      } else if (event.key === '0') {
        event.preventDefault();
        resetView();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        navigate(-1);
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        navigate(1);
      }
    };

    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.overflow = previousBodyOverflow;
    };
  }, [close, gallery === null, navigate, resetView, zoomAt]);

  useEffect(() => {
    if (!gallery || gallery.images.length < 2) return;
    for (const offset of [-1, 1]) {
      const neighborIndex = (gallery.index + offset + gallery.images.length) % gallery.images.length;
      const preload = new Image();
      preload.src = gallery.images[neighborIndex].src;
    }
  }, [gallery]);

  const handleWheel = (event: React.WheelEvent) => {
    event.preventDefault();
    const delta = Math.max(-120, Math.min(120, event.deltaY));
    zoomAt(viewRef.current.zoom * Math.exp(-delta * WHEEL_SENSITIVITY), event.clientX, event.clientY);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== 'mouse') {
      pointers.current.set(event.pointerId, {x: event.clientX, y: event.clientY});
      event.currentTarget.setPointerCapture(event.pointerId);
      if (pointers.current.size === 2) {
        const [first, second] = [...pointers.current.values()];
        pinch.current = {
          distance: Math.hypot(second.x - first.x, second.y - first.y) || 1,
          zoom: viewRef.current.zoom,
        };
        dragging.current = null;
        return;
      }
    }

    if (viewRef.current.zoom <= 1 || (event.pointerType === 'mouse' && event.button !== 0)) return;
    dragging.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      panX: viewRef.current.pan.x,
      panY: viewRef.current.pan.y,
      moved: false,
    };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (pointers.current.has(event.pointerId)) {
      pointers.current.set(event.pointerId, {x: event.clientX, y: event.clientY});
    }
    if (pinch.current && pointers.current.size >= 2) {
      const [first, second] = [...pointers.current.values()];
      const distance = Math.hypot(second.x - first.x, second.y - first.y) || 1;
      zoomAt(
        pinch.current.zoom * (distance / pinch.current.distance),
        (first.x + second.x) / 2,
        (first.y + second.y) / 2,
      );
      return;
    }

    const drag = dragging.current;
    if (!drag || drag.pointerId !== event.pointerId) return;
    const dx = event.clientX - drag.startX;
    const dy = event.clientY - drag.startY;
    if (Math.abs(dx) + Math.abs(dy) > 3) drag.moved = true;
    updateView({
      zoom: viewRef.current.zoom,
      pan: clampPan({x: drag.panX + dx, y: drag.panY + dy}, viewRef.current.zoom),
    });
  };

  const finishPointer = (event: React.PointerEvent<HTMLDivElement>) => {
    pointers.current.delete(event.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    const moved = dragging.current?.pointerId === event.pointerId && dragging.current.moved;
    if (dragging.current?.pointerId === event.pointerId) dragging.current = null;
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already have been released by the browser.
    }
    if (moved) {
      ignoreClick.current = true;
      window.setTimeout(() => { ignoreClick.current = false; }, 0);
    }
  };

  const handleImageClick = (event: React.MouseEvent<HTMLImageElement>) => {
    event.stopPropagation();
    if (ignoreClick.current) return;
    if (viewRef.current.zoom > 1) resetView();
    else zoomAt(CLICK_ZOOM, event.clientX, event.clientY);
  };

  if (!mounted || !gallery) return null;

  const openImage = gallery.images[gallery.index];
  const hasMultipleImages = gallery.images.length > 1;

  return createPortal(
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`Image viewer: ${openImage.alt}`}
      onPointerDown={(event) => {
        if (event.target === event.currentTarget) close();
      }}>
      <button
        ref={closeRef}
        className={styles.closeButton}
        type="button"
        onClick={close}
        aria-label="Close image viewer">
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>

      {hasMultipleImages ? (
        <>
          <button
            className={`${styles.navButton} ${styles.previousButton}`}
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Previous image">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button
            className={`${styles.navButton} ${styles.nextButton}`}
            type="button"
            onClick={() => navigate(1)}
            aria-label="Next image">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
          </button>
          <div className={styles.position} aria-live="polite">
            {gallery.index + 1} / {gallery.images.length}
          </div>
        </>
      ) : null}

      <div
        ref={viewportRef}
        className={`${styles.viewport} ${view.zoom > 1 ? styles.isZoomed : ''}`}
        onWheel={handleWheel}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishPointer}
        onPointerCancel={finishPointer}>
        <img
          ref={imageRef}
          src={openImage.src}
          alt={openImage.alt}
          draggable={false}
          onClick={handleImageClick}
          style={{transform: `translate3d(${view.pan.x}px, ${view.pan.y}px, 0) scale(${view.zoom})`}}
        />
      </div>

      <div className={styles.controls} aria-label="Zoom controls">
        {openImage.href ? (
          <a className={styles.sourceLink} href={openImage.href} target="_blank" rel="noreferrer">
            Open source
          </a>
        ) : null}
        <button type="button" onClick={() => zoomAt(viewRef.current.zoom / 1.35)} disabled={view.zoom <= 1} aria-label="Zoom out">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14" /></svg>
        </button>
        <button type="button" className={styles.zoomValue} onClick={resetView} aria-label="Reset zoom">
          {Math.round(view.zoom * 100)}%
        </button>
        <button type="button" onClick={() => zoomAt(viewRef.current.zoom * 1.35)} disabled={view.zoom >= MAX_ZOOM} aria-label="Zoom in">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
        </button>
      </div>
    </div>,
    document.body,
  );
}
