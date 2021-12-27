import {put, takeEvery, call} from 'redux-saga/effects';
import {FETCH_DATA, setDataAction} from "../reducers/timeTemperatureReducer";
import axios from "axios";

async function getDataFromApi() {
    const response = await axios.get(`http://localhost:8080/time/temperature`)
    return response.data
}

function* getDataWorker() {
    const data = yield call(getDataFromApi);
    yield put(setDataAction(data));
}

export function* getDataWatcher() {
    yield takeEvery(FETCH_DATA, getDataWorker)
}