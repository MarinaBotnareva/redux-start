import actionTypes from './actionTypes';

export const incrementAction = (payload) => {
  return { type: actionTypes.INCREMENT, payload };
};

export const decreaseAction = (payload) => ({
  type: actionTypes.DECREMENT,
  payload,
});

export const resetAction = () => ({ type: actionTypes.RESET });

/* addTaskAction creator */
export const addTaskAction = (payload) => ({ type: actionTypes.ADD_TASK, payload });

export const onChange = (key, value) => ({ type: actionTypes.ADD_USER, key, value });
export const onSubmit = () => ({ type: actionTypes.SUBMITION });