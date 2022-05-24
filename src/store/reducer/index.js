
const counterState = {
    score: 0,
};

export const counterReducer = (oldState = counterState, action) => {

    if (action.type === 'increment') {
        return { ...oldState, score: oldState.score + 1 };
    }
    // decrement
    // reset

    return oldState;
}
