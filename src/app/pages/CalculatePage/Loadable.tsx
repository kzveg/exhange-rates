/**
 * Asynchronously loads the component for CalculatePage
 */

import * as React from 'react';
import { lazyLoad } from 'utils/loadable';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export const CalculatePage = lazyLoad(
  () => import('./index'),
  module => module.CalculatePage,
  {
    fallback: <LoadingIndicator />,
  },
);
