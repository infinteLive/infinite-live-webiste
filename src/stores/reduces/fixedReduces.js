import { READ_FIXED} from "../actionTypes";
  
  const inisialData = {
    dataFixed: [],
  };
  const fixedReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_FIXED:
        return {
          ...state,
          dataFixed: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default fixedReduces;
  