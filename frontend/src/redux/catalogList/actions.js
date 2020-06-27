import {
    CATALOG_SEARCH_FAILURE,
    CATALOG_SEARCH_REQUEST,
    CATALOG_SEARCH_SUCCESS,
    CHANGE_SEARCH_FIELD,
    FETCH_CATALOG_FAILURE,
    FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_MORE_CATALOG_FAILURE,
    FETCH_MORE_CATALOG_REQUEST,
    FETCH_MORE_CATALOG_SUCCESS,
    SELECT_CATALOG_CATEGORY
} from "./types";

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