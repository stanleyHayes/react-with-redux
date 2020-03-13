import {SHOW_UNCOMPLETED, SHOW_COMPLETED, SHOW_ALL} from "./visibilityActionTypes";

const initialVisibilityState = {
    visibility: SHOW_ALL
};

const visibilityReducer = function (state = initialVisibilityState, action) {
    switch (action.type) {
        case SHOW_ALL:

            return {
                ...state,
                visibility: SHOW_ALL
            };

        case SHOW_COMPLETED:
            return {
                ...state,
                visibility: SHOW_COMPLETED
            };

        case SHOW_UNCOMPLETED:
            return {
                ...state,
                visibility: SHOW_UNCOMPLETED
            };

        default:
            return state;
    }
};

export default visibilityReducer;
