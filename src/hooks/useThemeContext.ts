import React from 'react';
import { ThemeContext } from '../App';

export const useThemeContext = () => {
  const theme = React.useContext(ThemeContext);
  return theme;
};
