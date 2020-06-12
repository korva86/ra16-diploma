import {
    ADD_TO_CART, ALERT_HIDE, ALERT_SHOW, CART_ORDER_FAILURE, CART_ORDER_REQUEST, CART_ORDER_SUCCESS,
    CATALOG_ITEM_FAILURE,
    CATALOG_ITEM_REQUEST, CATALOG_ITEM_SUCCESS,
    CATALOG_SEARCH_FAILURE,
    CATALOG_SEARCH_REQUEST, CATALOG_SEARCH_SUCCESS, CHANGE_CART_OWNER,
    CHANGE_SEARCH_FIELD, DELETE_FROM_CART,
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_MORE_CATALOG_FAILURE,
    FETCH_MORE_CATALOG_REQUEST,
    FETCH_MORE_CATALOG_SUCCESS, SELECT_CATALOG_CATEGORY, TOP_SALES_FAILURE, TOP_SALES_REQUEST, TOP_SALES_SUCCESS
} from "./actionTypes";

export const fetchCatalogRequest = (id, offset, search) => {
    return {
        type: FETCH_CATALOG_REQUEST,
        payload: {id, offset, search}
    }
};

export const fetchCatalogSuccess = (items) => {
    return {
        type: FETCH_CATALOG_SUCCESS,
        payload: {items}
    }
};

export const fetchCatalogError = (error) => {
    return {
        type: FETCH_CATALOG_FAILURE,
        payload: {error}
    }
};

export const fetchCategoriesRequest = () => {
    return {
        type: FETCH_CATEGORIES_REQUEST,
    }
};

export const fetchCategoriesSuccess = (categories) => {
    return {
        type: FETCH_CATEGORIES_SUCCESS,
        payload: {categories}
    }
};

export const fetchCategoriesError = (error) => {
    return {
        type: FETCH_CATEGORIES_FAILURE,
        payload: {error}
    }
};

export const fetchMoreCatalogRequest = (id, offset, search) => {
    return {
        type: FETCH_MORE_CATALOG_REQUEST,
        payload: {id, offset, search}
    }
};

export const fetchMoreCatalogError = (error) => {
    return {
        type: FETCH_MORE_CATALOG_FAILURE,
        payload: {error}
    }
};

export const fetchMoreCatalogSuccess = (cards) => {
    return {
        type: FETCH_MORE_CATALOG_SUCCESS,
        payload: {cards}
    }
};

export const selectCatalogCategory = (selectedCategory) => {
    return {
        type: SELECT_CATALOG_CATEGORY,
        payload: {selectedCategory}
    }
};

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

export const changeSearchCatalog = search => ({
    type: CHANGE_SEARCH_FIELD,
    payload: {search},
});

export const catalogSearchRequest = (id, offset, search) => {
    return {
        type: CATALOG_SEARCH_REQUEST,
        payload: {id, offset, search}
    }
};

export const catalogSearchSuccess = (items) => {
    return {
        type: CATALOG_SEARCH_SUCCESS,
        payload: {items}
    }
};

export const catalogSearchFailure = (error) => {
    return {
        type: CATALOG_SEARCH_FAILURE,
        payload: {error}
    }
};

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

export const alertShow = (text, type = 'warning') => ({
    type: ALERT_SHOW,
    payload: {text, type}
});

export const alertHide = () => ({
    type: ALERT_HIDE,
});

