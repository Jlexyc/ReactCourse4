import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Switch, FormControlLabel } from '@mui/material';

import { PersistGate } from 'redux-persist/integration/react';
import { Dashboard } from './components/Dashboard/Dashboard';
import { TitleActors } from './components/TitleActors/TitleActors';
import { store, persistor } from './rdx';

import './App.css';

const defaultTheme = 'light';
export const ThemeContext = React.createContext(defaultTheme);

const App = () => {
  const [theme, setTheme] = React.useState(defaultTheme);

  const onThemeChanged = React.useCallback(
    (_event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => {
      if (checked) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="themeControl">
          <FormControlLabel control={<Switch checked={theme === 'dark'} onChange={onThemeChanged} />} label="Dark Mode" />
        </div>
        <ThemeContext.Provider value={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/credits/:id" element={<TitleActors />} />
            </Routes>
          </BrowserRouter>
        </ThemeContext.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
