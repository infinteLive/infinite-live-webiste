import { READ_RENT_DETAIL_PROJECT} from "../actionTypes";
const inisialData = {
    dataRentDetailProject: {},
  };
  const rentProjectDetailReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_RENT_DETAIL_PROJECT:
        return {
          ...state,
         dataRentDetailProject: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default rentProjectDetailReduces;