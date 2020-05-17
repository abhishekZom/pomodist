import { all, fork } from 'redux-saga/effects';
import "regenerator-runtime/runtime.js";
import tasksSaga from './tasks';

export default function* rootSaga() {
    yield all([
        fork(tasksSaga),
    ]);
}
