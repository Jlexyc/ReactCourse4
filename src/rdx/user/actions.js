export const LOGIN_USER = '@user/LOGIN_USER';
export const LOGOUT_USER = '@user/LOGOUT_USER';

export const loginUser = ({ login, password }) => ({
  type: LOGIN_USER,
  login,
  password,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});
