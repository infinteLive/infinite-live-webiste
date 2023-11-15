import { READ_TOOLS_VENUE_LAYOUTS } from "../actionTypes";

const inisialData = {
    dataToolsVenueLayouts: []
}

const toolsVenueLayoutsReducer = (state = inisialData, action) => {
    const {type,payload} = action;
    switch(type){
        case READ_TOOLS_VENUE_LAYOUTS:
            return {
                ...state,
               dataToolsVenueLayouts: payload
            }
        default:
            return state
    }
}

export default toolsVenueLayoutsReducer

