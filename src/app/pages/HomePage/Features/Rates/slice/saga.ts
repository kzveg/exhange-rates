import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectBase } from './selectors';
import { ratesFormActions as actions } from '.';
import { RatesState } from './types';

const API_KEY = '7ae7d4dc9bf2666182a4426f2c0e6995';

/**
 * Github repos request/response handler
 */
export function* getRates() {
  yield delay(500);
  const base: string = yield select(selectBase);
  const requestURL = `api.exchangeratesapi.io/v1/latest/?access_key=${API_KEY}&base=${base}`;

  try {
    // Call our request helper (see 'utils/request')
    const rates: RatesState = yield call(request, requestURL);
    if (rates?.success) {
      yield put(actions.ratesLoaded(rates));
    } else {
      yield put(actions.ratesError());
    }
  } catch (err: any) {
    if (err.response?.status === 404) {
      yield put(actions.ratesError());
    } else if (err.message === 'Failed to fetch') {
      yield put(actions.ratesError());
    } else {
      yield put(actions.ratesError());
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* ratesFormSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadRates.type, getRates);
}
