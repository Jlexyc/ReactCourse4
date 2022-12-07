import { createAction } from 'typesafe-actions';

export enum UserActions {
  LOGIN_USER = '@user/LOGIN_USER',
  LOGOUT_USER = '@user/LOGOUT_USER',
}

export const loginUserAction = createAction(
  UserActions.LOGIN_USER,
  ({ login, password }: { login: string; password: string }) => ({
    login,
    password,
  }),
)();

export const logoutUserAction = createAction(UserActions.LOGOUT_USER)();
