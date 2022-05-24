import actionTypes from "../actions/actionTypes";

const tasksState = {
  list: [],
};

export const tasksReducer = (oldState = tasksState, action) => {
  if (action.type === actionTypes.ADD_TASK) {
    return {
      ...oldState,
      list: [
        /* add new task from action.payload */
      ],
    };
  }
};
