import { READ_RENT} from "../actionTypes";
  
  const inisialData = {
    dataRent: [],
  };
  const rentReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_RENT:
        return {
          ...state,
          dataRent: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default rentReduces;
  