import {addToCart} from "../redux/cart/actions";

export default class Product {
    constructor(id, title, size, count, price) {
        this.id = id;
        this.title = title;
        this.size = size;
        this.count = count;
        this.price = price;
    }
}

export function localStorageUpdateItems(items, dispatch) {
    if(items.length) {
        localStorage.setItem('cartProduct', JSON.stringify(items));
    }
    if(!items.length) {
        const data = JSON.parse(localStorage.getItem('cartProduct'));
        if(data && data.length) {
            dispatch(addToCart(data));
        }
    }
}