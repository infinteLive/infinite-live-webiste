import { READ_CATEGORY_FIXED } from "../actionTypes";
  
  const inisialData = {
    dataCategoryFixed: [],
  };
  const fixedCategoryReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_CATEGORY_FIXED:
        return {
          ...state,
          dataCategoryFixed: payload,
        };
      default:
        return state;
    }
  };
  
  export default fixedCategoryReduces;
  