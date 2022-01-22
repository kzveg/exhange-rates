import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.rates || initialState;

export const selectBase = createSelector(
  [selectDomain],
  ratesFormState => ratesFormState.base,
);

export const selectLoading = createSelector(
  [selectDomain],
  ratesFormState => ratesFormState.success,
);

export const selectRates = createSelector(
  [selectDomain],
  ratesFormState => ratesFormState.rates,
);
