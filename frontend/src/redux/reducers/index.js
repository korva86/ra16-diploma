import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catalogListReducer from "./CatalogList";
import topSalesReducer from "./TopSales";
import catalogItemReducer from "./CatalogItem";
import cartReducer from "./Cart";
import alertReducer from "./AlertReducer";

const rootReducer = combineReducers({
    router: routerReducer,
    catalog: catalogListReducer,
    topSales: topSalesReducer,
    catalogItem: catalogItemReducer,
    cart: cartReducer,
    alert: alertReducer,
});

export default rootReducer;