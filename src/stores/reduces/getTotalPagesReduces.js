import { READ_TOTAL_PAGE } from "../actionTypes";
  
  const inisialData = {
   totalPage: ""
  };
  const getTotalPagesReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_TOTAL_PAGE:
        return {
          ...state,
          totalPage: payload,
        };
      default:
        return state;
    }
  };
  
  export default getTotalPagesReduces;
  