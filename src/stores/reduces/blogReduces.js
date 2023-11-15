import { READ_BLOG } from "../actionTypes";

const inisialData = {
    dataBlog: []
}

const blogReduces = (state = inisialData, action) => {
    const {type,payload} = action;
    switch(type){
        case READ_BLOG:
            return {
                ...state,
                dataBlog: payload
            }
        default:
            return state
    }
}

export default blogReduces

