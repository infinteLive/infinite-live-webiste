import { READ_TOOLS_ARTIST_RIDERS } from "../actionTypes";

const inisialData = {
    dataToolsArtistRiders: []
}

const toolsArtistRidersReducer = (state = inisialData, action) => {
    const {type,payload} = action;
    switch(type){
        case READ_TOOLS_ARTIST_RIDERS:
            return {
                ...state,
               dataToolsArtistRiders: payload
            }
        default:
            return state
    }
}

export default toolsArtistRidersReducer

