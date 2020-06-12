import {
    ALERT_HIDE,
    TOP_SALES_FAILURE,
    TOP_SALES_REQUEST,
    TOP_SALES_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    sales: [],
    loading: false,
    error: null,
};

export default function topSalesReducer(state = initialState, action) {
    switch (action.type) {
        case TOP_SALES_REQUEST:
            return {...state, loading: true, error: null};
        case TOP_SALES_FAILURE:
            const {error} = action.payload;
            return {...state, error: error, loading: false};
        case TOP_SALES_SUCCESS:
            const {sales} = action.payload;
            return {...state, sales, loading: false, error: null};
        case ALERT_HIDE:
            return {...state, error: null};
        default:
            return state
    }
}