import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsUserAuthenticated } from '../../rdx/user/selectors';

interface AuthRequireProps {
  children: React.ReactElement,
}

export const AuthRequire = ({ children }: AuthRequireProps) => {
  const isUserAuthenticated = useSelector(selectIsUserAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isUserAuthenticated) {
      navigate('/login');
    }
  }, [isUserAuthenticated]);

  return isUserAuthenticated ? children : null;
};
