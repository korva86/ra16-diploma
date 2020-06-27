import { retry, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {fetchCatalogList, fetchCategories} from "../api.js";
import {
    CATALOG_SEARCH_REQUEST,
    FETCH_CATALOG_REQUEST,
    FETCH_CATEGORIES_REQUEST,
    FETCH_MORE_CATALOG_REQUEST
} from "./types";
import {
    catalogSearchFailure,
    catalogSearchSuccess, fetchCatalogError, fetchCatalogSuccess, fetchCategoriesError, fetchCategoriesSuccess,
    fetchMoreCatalogError,
    fetchMoreCatalogSuccess
} from "./actions";

function* handleFetchCatalog(action) {
    try {
        const data = yield retry(3, 3000, fetchCatalogList, action.payload.id, action.payload.offset, action.payload.search);
        yield put(fetchCatalogSuccess(data))
    } catch (e) {
        yield put(fetchCatalogError(e.message))
    }
}

export function* watchFetchCatalog() {
    yield takeEvery(FETCH_CATALOG_REQUEST, handleFetchCatalog)
}

function* handleFetchCategories() {
    try {
        const data = yield retry(3, 3000, fetchCategories);
        yield put(fetchCategoriesSuccess(data))
    } catch (e) {
        yield put(fetchCategoriesError(e.message))
    }
}

export function* watchFetchCategories() {
    yield takeLatest(FETCH_CATEGORIES_REQUEST, handleFetchCategories)
}

function* handleFetchMoreCatalog(action) {
    try {
        const data = yield retry(3, 3000, fetchCatalogList, action.payload.id, action.payload.offset, action.payload.search);
        yield put(fetchMoreCatalogSuccess(data))
    } catch (e) {
        yield put(fetchMoreCatalogError(e.message))
    }
}

export function* watchFetchMoreCatalog() {
    yield takeEvery(FETCH_MORE_CATALOG_REQUEST, handleFetchMoreCatalog)
}

function* handleSearchCatalog(action) {
    try {
        const data = yield retry(3, 3000, fetchCatalogList, action.payload.id, action.payload.offset, action.payload.search);
        yield put(catalogSearchSuccess(data))
    } catch (e) {
        yield put(catalogSearchFailure(e.message))
    }
}

export function* watchSearchCatalog() {
    yield takeEvery(CATALOG_SEARCH_REQUEST, handleSearchCatalog)
}