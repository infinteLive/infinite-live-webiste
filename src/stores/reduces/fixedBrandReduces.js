import { READ_BRAND_FIXED } from "../actionTypes";
  
  const inisialData = {
    dataBrandFixed: [],
  };
  const fixedBrandReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_BRAND_FIXED:
        return {
          ...state,
          dataBrandFixed: payload,
        };
      default:
        return state;
    }
  };
  
  export default fixedBrandReduces;
  