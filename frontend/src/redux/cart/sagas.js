import { retry, put, takeLatest} from 'redux-saga/effects';
import {sendOrder} from "../api.js";
import {CART_ORDER_REQUEST} from "./types";
import {cartOrderError, cartOrderSuccess} from "./actions";

function* handleCartOrder(action) {
    try {
        const data = yield retry(3, 3000, sendOrder, action.payload.cart);
        yield put(cartOrderSuccess(data))
    } catch (e) {
        yield put(cartOrderError(e.message))
    }
}

export function* watchCartOrder() {
    yield takeLatest(CART_ORDER_REQUEST, handleCartOrder)
}