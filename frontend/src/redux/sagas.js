import { all, } from 'redux-saga/effects';
import {watchFetchCatalog, watchFetchCategories, watchFetchMoreCatalog, watchSearchCatalog} from "./catalogList/sagas";
import {watchFetchTopSales} from "./topSales/sagas";
import {watchFetchCatalogItem} from "./catalogItem/sagas";
import {watchCartOrder} from "./cart/sagas";

export default function* rootSaga() {
    yield all([
        watchFetchCatalog(),
        watchFetchCategories(),
        watchFetchMoreCatalog(),
        watchFetchTopSales(),
        watchSearchCatalog(),
        watchFetchCatalogItem(),
        watchCartOrder()
    ])
}