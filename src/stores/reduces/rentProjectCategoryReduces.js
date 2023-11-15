import { READ_RENT_PROJECT_CATEGORY } from "../actionTypes";
const inisialData = {
    dataRentProjectCategory: [],
  };
  const rentProjectCategoryReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_RENT_PROJECT_CATEGORY:
        return {
          ...state,
         dataRentProjectCategory: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default rentProjectCategoryReduces;