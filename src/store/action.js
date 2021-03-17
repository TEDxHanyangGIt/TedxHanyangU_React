import Constant from "./constant"

export function setCurPage(key) {
    return {
        type: Constant.SET_CUR_PAGE,
        payload: key,
    };
}