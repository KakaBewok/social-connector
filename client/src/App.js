import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import './App.css';
// redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <section className="container"> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* </section> */}
      </Routes>
    </Fragment>
  </Provider>
);

export default App;
