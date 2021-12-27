import {all} from 'redux-saga/effects';
import {getDataWatcher} from "./getDataSaga";

export function* rootWatcher() {
    yield all([getDataWatcher()])
}