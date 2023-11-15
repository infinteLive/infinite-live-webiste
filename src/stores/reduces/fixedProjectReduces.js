import { READ_FIXED_PROJECT } from "../actionTypes";
const inisialData = {
    dataFixedProject: [],
  };
  const fixedProjectReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_FIXED_PROJECT:
        return {
          ...state,
          dataFixedProject: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default fixedProjectReduces;