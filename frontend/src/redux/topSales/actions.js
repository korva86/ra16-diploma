import {TOP_SALES_FAILURE, TOP_SALES_REQUEST, TOP_SALES_SUCCESS} from "./types";

export const topSalesRequest = () => {
    return {
        type: TOP_SALES_REQUEST,
    }
};
export const topSalesError = (error) => {
    return {
        type: TOP_SALES_FAILURE,
        payload: {error}
    }
};
export const topSalesSuccess = (sales) => {
    return {
        type: TOP_SALES_SUCCESS,
        payload: {sales}
    }
};