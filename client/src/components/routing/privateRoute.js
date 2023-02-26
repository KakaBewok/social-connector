/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  return !isAuthenticated && !loading ? navigate('/login') : children;
};

export default PrivateRoute;
