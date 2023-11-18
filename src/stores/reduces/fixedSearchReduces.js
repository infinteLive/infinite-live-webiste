import { READ_FIXED_SEARCH} from "../actionTypes";
  
  const inisialData = {
    dataFixedSearch: [],
  };
  const fixedSearchReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_FIXED_SEARCH:
        return {
          ...state,
          dataFixedSearch: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default fixedSearchReduces;
  