import { READ_TOOLS_VENUE_LAYOUTS_SEARCH} from "../actionTypes";
  
  const inisialData = {
    dataVenueLayoutsSearch: [],
  };
  const toolsVenueLayoutsSearchReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_TOOLS_VENUE_LAYOUTS_SEARCH:
        return {
          ...state,
          dataVenueLayoutsSearch: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default toolsVenueLayoutsSearchReduces;
  