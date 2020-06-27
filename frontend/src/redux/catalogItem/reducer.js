import {ALERT_HIDE} from "../alert/types";
import {CATALOG_ITEM_FAILURE, CATALOG_ITEM_REQUEST, CATALOG_ITEM_SUCCESS} from "./types";

const initialState = {
    item: {},
    loading: false,
    error: null,
};

export default function catalogItemReducer(state = initialState, action) {
    switch (action.type) {
        case CATALOG_ITEM_REQUEST:
            return {...state, loading: true, error: null};
        case CATALOG_ITEM_FAILURE:
            const {error} = action.payload;
            return {...state, error: error, loading: false};
        case CATALOG_ITEM_SUCCESS:
            const {item} = action.payload;
            return {...state, item, loading: false, error: null};
        case ALERT_HIDE:
            return {...state, error: null};
        default:
            return state
    }
}