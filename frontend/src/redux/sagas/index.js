import { spawn } from 'redux-saga/effects';
import {watchFetchCatalog, watchFetchCategories, watchFetchMoreCatalog, watchSearchCatalog} from "./CatalogSaga";
import {watchFetchTopSales} from "./TopSalesSaga";
import {watchFetchCatalogItem} from "./CatalogItemSaga";
import {watchCartOrder} from "./CartOrderSaga";

export default function* rootSaga() {
    yield spawn(watchFetchCatalog);
    yield spawn(watchFetchCategories);
    yield spawn(watchFetchMoreCatalog);
    yield spawn(watchFetchTopSales);
    yield spawn(watchSearchCatalog);
    yield spawn(watchFetchCatalogItem);
    yield spawn(watchCartOrder);
}