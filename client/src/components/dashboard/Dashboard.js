/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentProfileAction } from '../../redux/features/profile/profileAction';

const Dashboard = () => {
  // const { profile } = useSelector((state) => state.profileSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, []);

  return <div className="container">Dashboard</div>;
};

export default Dashboard;
