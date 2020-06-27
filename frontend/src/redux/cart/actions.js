import {
    ADD_TO_CART,
    CART_ORDER_FAILURE,
    CART_ORDER_REQUEST,
    CART_ORDER_SUCCESS,
    CHANGE_CART_OWNER,
    DELETE_FROM_CART
} from "./types";

export const addToCart = (item) => {
    return {
        type: ADD_TO_CART,
        payload: {item}
    }
};
export const deleteFromCart = (i) => {
    return {
        type: DELETE_FROM_CART,
        payload: {i}
    }
};
export const handleChangeCartOwner = (id, value) => {
    return {
        type: CHANGE_CART_OWNER,
        payload: {id, value}
    }
};
export const cartOrderRequest = (cart) => {
    return {
        type: CART_ORDER_REQUEST,
        payload: {cart}
    }
};
export const cartOrderSuccess = (success) => {
    return {
        type: CART_ORDER_SUCCESS,
        payload: {success}
    }
};
export const cartOrderError = (error) => {
    return {
        type: CART_ORDER_FAILURE,
        payload: {error}
    }
};