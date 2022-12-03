import React from 'react';
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line max-len
export const withNavigate = (Component) => (props) => <Component {...props} navigate={useNavigate()} />;
