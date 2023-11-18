import {  READ_BLOG_RANDOM } from "../actionTypes";

const inisialData = {
    dataBlogRandom: []
}

const blogRandomReduces = (state = inisialData, action) => {
    const {type,payload} = action;
    switch(type){
        case READ_BLOG_RANDOM:
            return {
                ...state,
                dataBlogRandom: payload
            }
        default:
            return state
    }
}

export default blogRandomReduces

