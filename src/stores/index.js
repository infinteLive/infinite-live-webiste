import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
  } from "redux";

import thunk from 'redux-thunk'
import rentReduces from "./reduces/rentReduces";
import fixedReduces from "./reduces/fixedReduces";
import categoryRentReduces from "./reduces/categoryRentReduces";
import subCategoryRentReduces from "./reduces/subCategoryRentReduces";




const combinedReducers = combineReducers({
    dataRent : rentReduces,
    dataFixed : fixedReduces,
    dataCategoryRent : categoryRentReduces,
    subCategories : subCategoryRentReduces
})
const store = createStore(combinedReducers,applyMiddleware(thunk))

export default store