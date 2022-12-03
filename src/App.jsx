import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { AuthRequire } from './components/AuthRequire/AuthRequire';
import Dashboard from './components/Dashboard/Dashboard';
import EditItemForm from './components/EditItemForm/EditItemForm';
import { Login } from './components/Login/Login';

import { store, persistor } from './rdx';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<AuthRequire><Dashboard /></AuthRequire>}>
                <Route path="/addItem" element={<EditItemForm />} />
                <Route path="/editItem/:id" element={<EditItemForm />} />
              </Route>
              <Route path="/login" element={<Login />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
