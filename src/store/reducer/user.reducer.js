import actionTypes from "../actions/actionTypes";

const userState = {
    userName: '',
    email: '',
    password: '',
    confPassword: '',
    submit: false,
}

export const userReducer = (state = userState, action) => {
  if (action.type === actionTypes.ADD_USERNAME) {
    return {
      ...state,
     userName: action.value,
    };
  }
  if (action.type === actionTypes.ADD_EMAIL) {
    return {
      ...state,
     email: action.value,
    };
  }
    if (action.type === actionTypes.ADD_PASSWORD) {
      return {
        ...state,
       password: action.value,
      };
    }
    if (action.type === actionTypes.ADD_CONFPASSWORD) {
      return {
        ...state,
       confPassword: action.value,
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