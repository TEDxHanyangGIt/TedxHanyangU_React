import Constant from "./constant"

export function setCurPage(key) {
    return {
        type: Constant.SET_CUR_PAGE,
        payload: key,
    };
}

export function toggleDrawer(bol) {
    return {
        type: Constant.TOGGLE_DRAWER,
        payload: bol,
    };
}