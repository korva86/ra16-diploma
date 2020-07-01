import {ALERT_HIDE} from "../alert/types";
import {
    CATALOG_SEARCH_FAILURE,
    CATALOG_SEARCH_REQUEST,
    CATALOG_SEARCH_SUCCESS,
    CHANGE_SEARCH_FIELD,
    FETCH_CATALOG_FAILURE, FETCH_CATALOG_REQUEST,
    FETCH_CATALOG_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    FETCH_CATEGORIES_REQUEST,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_MORE_CATALOG_FAILURE,
    FETCH_MORE_CATALOG_REQUEST,
    FETCH_MORE_CATALOG_SUCCESS,
    SELECT_CATALOG_CATEGORY
} from "./types";

const initialState = {
    items: [],
    loading: false,
    error: null,
    categories: [],
    loadingMore: false,
    fullFetched: false,
    offset: 0,
    selectedCategory: 0,
    search: '',
};

export default function catalogListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CATALOG_REQUEST:
        case CATALOG_SEARCH_REQUEST:
            return {...state, loading: true, error: null, items: []};
        case FETCH_CATEGORIES_REQUEST:
            return {...state, loading: true, error: null, selectedCategory: 0,};
        case FETCH_CATEGORIES_FAILURE:
        case FETCH_CATALOG_FAILURE:
        case FETCH_MORE_CATALOG_FAILURE:
        case CATALOG_SEARCH_FAILURE:
            const {error} = action.payload;
            return {...state, error: error, loading: false};
        case FETCH_CATALOG_SUCCESS:
        case CATALOG_SEARCH_SUCCESS:
            const {items} = action.payload;
            if (items.length < 6) {
                return {...state, items, loading: false, error: null, offset: items.length, fullFetched: true};
            }
            return {...state, items, loading: false, error: null, offset: items.length, fullFetched: false};
        case FETCH_CATEGORIES_SUCCESS:
            const {categories} = action.payload;
            return {...state, categories, loading: false, error: null};
        case FETCH_MORE_CATALOG_REQUEST:
            return {...state, loadingMore: true, error: null};
        case FETCH_MORE_CATALOG_SUCCESS:
            const {cards} = action.payload;
            try {
                if (cards.length < 6) {
                    if(cards.length === 0) {
                        return {...state,
                            items: state.items.concat(cards),
                            loadingMore: false,
                            fullFetched: true
                        }
                    }
                    return {...state,
                        items: state.items.concat(cards),
                        loadingMore: false,
                        offset: state.offset + cards.length,
                        fullFetched: true
                    };
                }
            } catch (e) {
                return {...initialState}
            }
            return {...state,
                items: state.items.concat(cards),
                loadingMore: false,
                offset: state.offset + cards.length,
                fullFetched: false,
            };
        case SELECT_CATALOG_CATEGORY:
            const {selectedCategory} = action.payload;
            return {...state, selectedCategory,};
        case CHANGE_SEARCH_FIELD:
            const {search} = action.payload;
            return {...state, search};
        case ALERT_HIDE:
            return {...state, error: null};
        default:
            return state
    }
}

