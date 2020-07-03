import { all, fork } from 'redux-saga/effects';
import * as catalogListSagas from "./catalogList/sagas";
import * as topSalesSagas from "./topSales/sagas";
import * as catalogItemSagas from "./catalogItem/sagas";
import * as cartItemSagas from "./cart/sagas";

export default function* rootSaga() {
    yield all(
        [...Object.values(catalogListSagas),
        ...Object.values(topSalesSagas),
        ...Object.values(catalogItemSagas),
        ...Object.values(cartItemSagas)
        ].map(fork)
    )
}