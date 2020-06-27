import {ALERT_HIDE} from "../alert/types";
import {
    ADD_TO_CART,
    CART_ORDER_FAILURE,
    CART_ORDER_REQUEST,
    CART_ORDER_SUCCESS,
    CHANGE_CART_OWNER,
    DELETE_FROM_CART
} from "./types";

const initialState = {
    items: [],
    loading: false,
    error: null,
    owner: {},
    success: false,
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            const {item} = action.payload;
            const index = state.items.findIndex(({ id, size }) => {
                return id === item.id && size === item.size;
            });
            if(index !== -1) {
                const newItems = state.items.map((product, i) => {
                    if(index === i) {
                        product.count = product.count + item.count;
                        return product
                    } return product
                });
                return {...state, items: newItems, success: false};
            }
            return {...state, items: state.items.concat(item), success: false};
        case DELETE_FROM_CART:
            const {i} = action.payload;
            localStorage.setItem('cartProduct', JSON.stringify(state.items.filter((item) => i !== item)));
            return {...state, items: state.items.filter((item) => i !== item), success: false};
        case CHANGE_CART_OWNER:
            const {id, value} = action.payload;
            return {...state, owner: {...state.owner, [id]: value}, success: false};
        case CART_ORDER_REQUEST:
            return {...state, loading: true, error: null, success: false};
        case CART_ORDER_FAILURE:
            const {error} = action.payload;
            return {...state, loading: false, error, success: false, owner: {},};
        case CART_ORDER_SUCCESS:
            localStorage.setItem('cartProduct', null);
            return {...state, items: [], owner: {}, success: true, loading: false, error: null};
        case ALERT_HIDE:
            return {...state, success: false, };
        default:
            return state
    }
}