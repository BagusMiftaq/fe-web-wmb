import {combineReducers} from "redux";
import menuReducers from "./reducers/menuReducers";
import tableReducers from "./reducers/tableReducer";
import orderReducers from "./reducers/orderReducers";

const rootReducers = combineReducers({
    menus : menuReducers,
    tables : tableReducers,
    orders : orderReducers
})

export default rootReducers;