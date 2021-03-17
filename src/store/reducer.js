import Constant from "./constant"
import initialState from "./state"

export default function rootReducer(state=initialState, action){
    switch(action.type){
        //  ============== 0. Common ==============  //
        case Constant.SET_CUR_PAGE:
            return Object.assign({}, state, {
                cur_page: action.payload
            })
        //  ============== 1. Home ==============  //
        default:
            return state;
    }
}
