import { READ_FIXED_PROJECT_CATEGORY } from "../actionTypes";
const inisialData = {
    dataFixedProjectCategory: [],
  };
  const fixedProjectCategoryReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_FIXED_PROJECT_CATEGORY:
        return {
          ...state,
         dataFixedProjectCategory: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default fixedProjectCategoryReduces;