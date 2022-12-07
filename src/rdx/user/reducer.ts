import { getType } from 'typesafe-actions';
import { GlobalAppActions } from '../actions';
import { loginUserAction, logoutUserAction } from './actions';

export interface UserState {
  isUserAuthenticated: boolean;
  username: string | null;
}

const initialState: UserState = {
  isUserAuthenticated: false,
  username: null,
};

export const reducer = (state = initialState, action: GlobalAppActions): UserState => {
  switch (action.type) {
    case getType(loginUserAction):
      return {
        ...state,
        isUserAuthenticated: true,
        username: action.payload.login,
      };
    case getType(logoutUserAction):
      return {
        ...state,
        isUserAuthenticated: false,
        username: null,
      };
    default:
      return state;
  }
};
