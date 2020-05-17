import { put, call, takeEvery } from 'redux-saga/effects';
import "regenerator-runtime/runtime.js";
// import apiProvider from '../api/provider';
// import { EDIT_REFERENCE_RATES_ROUTE } from '../api/routes';
// import {
//   EDIT_REFERENCE_RATES,
//   EDIT_REFERENCE_RATES_SUCCESS,
//   EDIT_REFERENCE_RATES_FAILED,
//  } from '../actions/constants';
// import { getAuthenticationHeaders } from '../api/utils';

export function* createNewTack(action) {
    yield put({ type: 'EDIT_REFERENCE_RATES_SUCCESS', payload: {} });
}
export function* tasksSaga() {
    yield takeEvery('EDIT_REFERENCE_RATES', createNewTack);
}

export default tasksSaga;
