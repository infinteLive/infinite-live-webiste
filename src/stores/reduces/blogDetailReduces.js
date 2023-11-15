import { READ_BLOG_DETAIL} from "../actionTypes";
const inisialData = {
    dataBlogDetail: {},
  };
  const blogDetailReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_BLOG_DETAIL:
        return {
          ...state,
         dataBlogDetail: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default blogDetailReduces;