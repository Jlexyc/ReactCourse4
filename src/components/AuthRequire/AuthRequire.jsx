import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { selectIsUserAuthenticated } from '../../rdx/user/selectors';

export const AuthRequire = ({ children }) => {
  const isUserAuthenticated = useSelector(selectIsUserAuthenticated);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isUserAuthenticated) {
      navigate('/login');
    }
  }, [isUserAuthenticated]);

  console.log('children: ', children);
  return isUserAuthenticated ? children : null;
};

AuthRequire.propTypes = {
  children: PropTypes.element,
};
