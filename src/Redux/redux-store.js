import {combineReducers, legacy_createStore} from "redux";
import CurrencyReducer from "./CurrencyReducer";

let reducers = combineReducers({
    Currency: CurrencyReducer,
});
export let store = legacy_createStore(reducers);

