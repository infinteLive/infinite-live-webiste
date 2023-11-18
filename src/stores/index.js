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
import blogReduces from "./reduces/blogReduces";
import rentSearchReduces from "./reduces/rentSearchReduces";
import fixedBrandReduces from "./reduces/fixedBrandReduces";
import fixedCategoryReduces from "./reduces/fixedCategoryReduces";
import fixedSearchReduces from "./reduces/fixedSearchReduces";
import toolsVenueLayoutsReducer from "./reduces/toolsVenueLayoutsReduces";
import toolsVenueLayoutsSearchReduces from "./reduces/toolsVenueLayoutsSearch";
import toolsArtistRidersReducer from "./reduces/toolsArtistRiderReduces";
import toolsArtisRiderSearchReduces from "./reduces/toolsArtistRiderSearchReduces";
import rentProjectReduces from "./reduces/rentProjectReduces";
import rentProjectCategoryReduces from "./reduces/rentProjectCategoryReduces";
import rentProjectDetailReduces from "./reduces/rentProjectDetailReduces";
import fixedProjectReduces from "./reduces/fixedProjectReduces";
import fixedProjectCategoryReduces from "./reduces/fixedProjectCategoryReduces";
import fixedProjectDetailReduces from "./reduces/fixedProjectDetailReduces";
import getTotalPagesReduces from "./reduces/getTotalPagesReduces";
import blogDetailReduces from "./reduces/blogDetailReduces";
import blogRandomReduces from "./reduces/blogRandomReduces";



const combinedReducers = combineReducers({
  totalPage: getTotalPagesReduces,
  dataRent : rentReduces,
  dataCategoryRent : categoryRentReduces,
  subCategories : subCategoryRentReduces,
  dataRentSearch: rentSearchReduces,
  dataFixed : fixedReduces,
  dataBrandFixed: fixedBrandReduces,
  dataCategoryFixed: fixedCategoryReduces,
  dataFixedSearch: fixedSearchReduces,
  dataBlog: blogReduces,
  dataToolsVenueLayouts: toolsVenueLayoutsReducer,
  dataVenueLayoutsSearch: toolsVenueLayoutsSearchReduces,
  dataToolsArtistRiders: toolsArtistRidersReducer,
  dataArtisRiderSearch: toolsArtisRiderSearchReduces,
  dataRentProject: rentProjectReduces,
  dataRentProjectCategory : rentProjectCategoryReduces,
  dataRentDetailProject: rentProjectDetailReduces,
  dataFixedProject: fixedProjectReduces,
  dataFixedProjectCategory: fixedProjectCategoryReduces,
  dataFixedDetailProject: fixedProjectDetailReduces,
  dataBlogDetail: blogDetailReduces,
  dataBlogRandom: blogRandomReduces,
})
const store = createStore(combinedReducers,applyMiddleware(thunk))

export default store