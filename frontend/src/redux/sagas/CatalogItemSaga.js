import { retry, put, takeEvery} from 'redux-saga/effects';
import {fetchCatalogItem} from "../api";
import {catalogItemError, catalogItemSuccess} from "../actions/actionCreators";
import {CATALOG_ITEM_REQUEST} from "../actions/actionTypes";

function* handleFetchCatalogItem(action) {
    try {
        const data = yield retry(3, 3000, fetchCatalogItem, action.payload.id);
        yield put(catalogItemSuccess(data))
    } catch (e) {
        yield put(catalogItemError(e.message))
    }
}

export function* watchFetchCatalogItem() {
    yield takeEvery(CATALOG_ITEM_REQUEST, handleFetchCatalogItem)
}