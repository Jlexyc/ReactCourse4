import React from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { loginUserAction } from '../../rdx/user/actions';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  } as const,
  textfield: {
    pb: '10px',
  },
};

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = React.useState({
    login: '',
    password: '',
  });

  const onUserChanged = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  }, [user]);

  const loginUserCallback = React.useCallback(() => {
    dispatch(loginUserAction(user));
    navigate('/');
  }, [user]);

  return (
    <div style={styles.container}>
      <TextField
        name="login"
        id="filled-basic"
        label="Login"
        variant="filled"
        sx={styles.textfield}
        onChange={onUserChanged}
        value={user.login}
      />
      <TextField
        name="password"
        id="filled-basic"
        label="Password"
        variant="filled"
        sx={styles.textfield}
        onChange={onUserChanged}
        value={user.password}
      />
      <Button size="small" onClick={loginUserCallback}>Login</Button>
    </div>
  );
};
