import { READ_BLOG_RANDOM_DETAIL} from "../actionTypes";
const inisialData = {
    dataBlogRandomDetail: {},
  };
  const blogRandomDetailReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_BLOG_RANDOM_DETAIL:
        return {
          ...state,
         dataBlogRandomDetail: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default blogRandomDetailReduces;