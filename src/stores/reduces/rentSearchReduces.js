import { READ_RENT_SEARCH} from "../actionTypes";
  
  const inisialData = {
    dataRentSearch: [],
  };
  const rentSearchReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_RENT_SEARCH:
        return {
          ...state,
          dataRentSearch: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default rentSearchReduces;
  