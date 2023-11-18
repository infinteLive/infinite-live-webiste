import { READ_RENT_PROJECT } from "../actionTypes";
const inisialData = {
    dataRentProject: [],
  };
  const rentProjectReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_RENT_PROJECT:
        return {
          ...state,
          dataRentProject: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default rentProjectReduces;