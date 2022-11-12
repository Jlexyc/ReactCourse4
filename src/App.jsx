
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import { Dashboard } from './components/Dashboard/Dashboard';
import { EditItemForm } from './components/EditItemForm/EditItemForm';

import { store } from './rdx';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} >
            <Route path='/addItem' element={<EditItemForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App;
