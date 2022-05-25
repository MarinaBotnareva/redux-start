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

export const onChangeUsername = (value) => ({ type: actionTypes.ADD_USERNAME, value });
export const onChangeEmail = (value) => ({ type: actionTypes.ADD_EMAIL, value });
export const onChangePassword = (value) => ({ type: actionTypes.ADD_PASSWORD, value });
export const onChangeConfPassword = (value) => ({ type: actionTypes.ADD_CONFPASSWORD, value });
export const onSubmit = () => ({ type: actionTypes.SUBMITION });