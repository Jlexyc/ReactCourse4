import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { AuthRequire } from './components/AuthRequire/AuthRequire';
import { Dashboard } from './components/Dashboard/Dashboard';
import { EditItemForm } from './components/EditItemForm/EditItemForm';
import { Login } from './components/Login/Login';

import { store } from './rdx';
import './App.css';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthRequire><Dashboard /></AuthRequire>}>
          <Route path="/addItem" element={<EditItemForm />} />
          <Route path="/editItem/:id" element={<EditItemForm />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
