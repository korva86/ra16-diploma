import { retry, put, takeEvery} from 'redux-saga/effects';
import {fetchCatalogItem} from "../api.js";
import {CATALOG_ITEM_REQUEST} from "./types";
import {catalogItemError, catalogItemSuccess} from "./actions";

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