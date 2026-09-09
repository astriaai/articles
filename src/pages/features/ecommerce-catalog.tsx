import React, {type ReactNode} from 'react';
import FeatureGuide from '../../components/FeatureGuide';
import {getFeatureGuide} from '../../features/guides';

export default function EcommerceCatalogPage(): ReactNode {
  return <FeatureGuide guide={getFeatureGuide('ecommerce-catalog')} />;
}
