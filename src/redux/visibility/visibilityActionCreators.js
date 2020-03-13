import { SHOW_ALL, SHOW_COMPLETED, SHOW_UNCOMPLETED} from "./visibilityActionTypes";

export const setShowAllVisibility = function () {
    return {
        type: SHOW_ALL
    }
};

export const setShowCompletedVisibility = function () {
    return {
        type: SHOW_COMPLETED
    }
};

export const setShowUncompletedVisibility = function () {
    return {
        type: SHOW_UNCOMPLETED
    }
};

