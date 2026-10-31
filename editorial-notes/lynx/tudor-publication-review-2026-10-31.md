# Tudor Lynx example — selected pair

User explicitly selected the before and after from prompt **47505171** on 2026-10-31 and requested commit, push and publication. This supersedes the agent-selected still life 47505243 and the earlier rejection of the wristshot. No new generation was needed for the correction.

- Before: user-supplied signed blob 230247731, filename `47505171-0-0.jpeg`. Its downloaded SHA-256 exactly matches the prompt's original debug image at https://mp.astria.ai/bms103346rhdlr22u7r2vj8fxixo.
- After: https://mp.astria.ai/prygt2479p2vysgbotbbbnodb5k3, the original behind the user's CDN delivery URL. SHA-256 matches the recorded finished frame.
- Reference: Tudor Black Bay 58 M7939A1A0NU-0001, official 1800 × 2400 product image, saved reference 6000014. The article links visibly to the manufacturer's source page. Original source and generated pair reviewed visually.
- Workspace 896 (Articles), Nano Banana 2, 4K setting, 4:3, one generated output, Lynx with the strong preset. Complete prompt and source metadata: `tudor-submission.json` and `tudor-result.json`.

The selected before has malformed small dial text. The finished frame makes the inscriptions readable, but also introduces a second TUDOR / GENEVE mark on the lower dial. The article caption explicitly identifies this mismatch and asks readers to review layout as well as lettering. This is the exact pair the user selected; it is not presented as perfect product fidelity.

`tudor-selection.json` records the exact URLs, hashes, dimensions and matched crop coordinates. `build-tudor-assets.py` asserts the selected original hashes before encoding the public files. Web copies use downsampling and WebP encoding only, with no retouching or upscaling. The later still-life assets remain internal and are excluded from this release.

Publication is prepared in an isolated checkout based on 2dfef7f085d578797c7013d956c5149856f4213b, the documentation-only successor of production source e2c8b4be6615ed7201dc36829f880e0438a05689 (release `weon-20261029-e2c8b4b`), preserving the published Modelia, Artiso and Weon additions. Only the Lynx article, its component/data, five selected images, its ledger row and these reproducibility records are included.

Validation: TypeScript, all 48 tests, strict production build and search/schema audit passed. All 161 existing sitemap URLs remain, with no additions or removals. Built HTML uses the selected 47505171 pair and discloses the duplicate lower mark; 47505243 is excluded. Built asset bytes match reviewed source assets.
