import {ALERT_HIDE, ALERT_SHOW} from "./types";

const initialState = {
    text: null,
    visible: false,
    type: null
};

export default function alertReducer(state = initialState, action) {
    switch (action.type) {
        case ALERT_SHOW:
            const {text, type} = action.payload;
            return {...state, text, type, visible: true};
        case ALERT_HIDE:
            return {...initialState};
        default:
            return state
    }
};