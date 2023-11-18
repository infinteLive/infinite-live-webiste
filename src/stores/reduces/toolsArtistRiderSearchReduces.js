import { READ_TOOLS_ARTIST_RIDERS_SEARCH} from "../actionTypes";
  
  const inisialData = {
    dataArtisRiderSearch: [],
  };
  const toolsArtisRiderSearchReduces = (state = inisialData, action) => {
    const { type, payload } = action;
    switch (type) {
      case READ_TOOLS_ARTIST_RIDERS_SEARCH:
        return {
          ...state,
          dataArtisRiderSearch: payload,
        };
    
      default:
        return state;
    }
  };
  
  export default toolsArtisRiderSearchReduces;
  