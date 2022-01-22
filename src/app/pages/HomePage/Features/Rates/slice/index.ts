import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ratesFormSaga } from './saga';
import { RatesState } from './types';

export const initialState: RatesState = {
  success: false,
  timestamp: null,
  base: 'UAH',
  date: null,
  rates: null,
};

const slice = createSlice({
  name: 'rates',
  initialState,
  reducers: {
    loadRates(state, action) {
      state.success = false;
      state.base = action.payload;
      state.rates = null;
    },
    ratesLoaded(state, action: PayloadAction<RatesState>) {
      const repos = action.payload;
      state = repos;
    },
    ratesError(state) {
      state.success = false;
    },
  },
});

export const { actions: ratesFormActions, reducer } = slice;

export const useRatesFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ratesFormSaga });
  return { actions: slice.actions };
};
