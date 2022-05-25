import actionTypes from "../actions/actionTypes";

const userState = {
    userName: '',
    email: '',
    password: '',
    confPassword: '',
    submit: false,
}

export const userReducer = (state = userState, action) => {
  if (action.type === actionTypes.ADD_USER) {
    return {
      ...state,
     [action.key]: action.value,
    };
  }
    if (action.type === actionTypes.SUBMITION) {
      return {
        ...state,
       submit: true,
      };
    }
  return state;
}

export default userReducer;