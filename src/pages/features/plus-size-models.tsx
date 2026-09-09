import React, {type ReactNode} from 'react';
import FeatureGuide from '../../components/FeatureGuide';
import {getFeatureGuide} from '../../features/guides';

export default function PlusSizeModelsPage(): ReactNode {
  return <FeatureGuide guide={getFeatureGuide('plus-size-models')} />;
}
