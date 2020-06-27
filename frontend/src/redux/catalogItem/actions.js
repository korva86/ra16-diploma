import {CATALOG_ITEM_FAILURE, CATALOG_ITEM_REQUEST, CATALOG_ITEM_SUCCESS} from "./types";

export const catalogItemRequest = (id) => {
    return {
        type: CATALOG_ITEM_REQUEST,
        payload: {id}
    }
};
export const catalogItemSuccess = (item) => {
    return {
        type: CATALOG_ITEM_SUCCESS,
        payload: {item}
    }
};
export const catalogItemError = (error) => {
    return {
        type: CATALOG_ITEM_FAILURE,
        payload: {error}
    }
};