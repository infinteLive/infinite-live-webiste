import { READ_SUBCATEGORY_RENT } from "../actionTypes";
  
  const inisialData = {
    subCategories : []
  };
  const subCategoryRentReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_SUBCATEGORY_RENT:
        return {
          ...state,
          subCategories: payload,
        };
      default:
        return state;
    }
  };
  
  export default subCategoryRentReduces;
  