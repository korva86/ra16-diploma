import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import catalogListReducer from "./catalogList/reducer";
import topSalesReducer from "./topSales/reducer";
import catalogItemReducer from "./catalogItem/reducer";
import cartReducer from "./cart/reducer";
import alertReducer from "./alert/reducer";

const rootReducer = combineReducers({
    router: routerReducer,
    catalog: catalogListReducer,
    topSales: topSalesReducer,
    catalogItem: catalogItemReducer,
    cart: cartReducer,
    alert: alertReducer,
});

export default rootReducer;