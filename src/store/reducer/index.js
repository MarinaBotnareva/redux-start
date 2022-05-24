import actionTypes from "../actions/actionTypes";

const counterState = {
    score: 0,
};

export const counterReducer = (oldState = counterState, action) => {

    if (action.type === actionTypes.INCREMENT) {
        return { ...oldState, score: oldState.score + 1 };
    }
    if (action.type === actionTypes.DECREMENT) {
        return { ...oldState, score: oldState.score - 1 };
    }
    if (action.type === actionTypes.RESET) {
        return { ...oldState, score: 0 };
    }

    return oldState;
}
