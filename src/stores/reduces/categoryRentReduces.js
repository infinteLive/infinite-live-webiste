import { READ_CATEGORY_RENT } from "../actionTypes";
  
  const inisialData = {
    dataCategoryRent: [],
    AddCategoryRent : {}
  };
  const categoryRentReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_CATEGORY_RENT:
        return {
          ...state,
          dataCategoryRent: payload,
        };
      default:
        return state;
    }
  };
  
  export default categoryRentReduces;
  