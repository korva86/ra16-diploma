import { retry, put, takeEvery} from 'redux-saga/effects';
import {fetchTopSales} from "../api";
import {
    topSalesError,
    topSalesSuccess
} from "../actions/actionCreators";
import {TOP_SALES_REQUEST} from "../actions/actionTypes";

function* handleFetchTopSales() {
    try {
        const data = yield retry(3, 3000, fetchTopSales);
        yield put(topSalesSuccess(data))
    } catch (e) {
        yield put(topSalesError(e.message))
    }
}

export function* watchFetchTopSales() {
    yield takeEvery(TOP_SALES_REQUEST, handleFetchTopSales)
}