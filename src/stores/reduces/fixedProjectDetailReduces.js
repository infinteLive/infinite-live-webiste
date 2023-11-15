import { READ_FIXED_DETAIL_PROJECT} from "../actionTypes";
const inisialData = {
    dataFixedDetailProject: {},
  };
  const fixedProjectDetailReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_FIXED_DETAIL_PROJECT:
        return {
          ...state,
         dataFixedDetailProject: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default fixedProjectDetailReduces;