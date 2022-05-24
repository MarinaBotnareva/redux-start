import actionTypes from './actionTypes';

export const incrementAction = (payload) => {
  return { type: actionTypes.INCREMENT, payload };
};

export const decreaseAction = (payload) => ({
  type: actionTypes.DECREMENT,
  payload,
});

export const resetAction = () => ({ type: actionTypes.RESET });
