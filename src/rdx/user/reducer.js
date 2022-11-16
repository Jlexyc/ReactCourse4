import { LOGIN_USER, LOGOUT_USER } from './actions';

const initialState = {
  isUserAuthenticated: false,
  username: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isUserAuthenticated: true,
        username: action.login,
      };
    case LOGOUT_USER:
      return {
        ...state,
        isUserAuthenticated: false,
        username: null,
      };
    default:
      return state;
  }
};
