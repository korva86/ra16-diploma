import {ALERT_HIDE, ALERT_SHOW} from "./types";

export const alertShow = (text, type = 'warning') => ({
    type: ALERT_SHOW,
    payload: {text, type}
});
export const alertHide = () => ({
    type: ALERT_HIDE,
});