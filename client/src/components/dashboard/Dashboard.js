/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { getCurrentProfileAction } from '../../redux/features/profile/profileAction';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import { FaUserAlt } from 'react-icons/fa';
import DashboardAction from './DashboardAction';
import Experience from './Experience';
import Education from './Education';
import Alert from '../layout/Alert';
import { FaUserMinus } from 'react-icons/fa';
import { deleteAccountAction } from '../../redux/features/profile/profileAction';

const Dashboard = () => {
  const { profile, loading } = useSelector((state) => state.profileSlice);
  const { user } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfileAction());
  }, []);

  return (
    <>
      <div className="container">
        {loading && profile === null ? (
          <Spinner />
        ) : (
          <>
            <h1 className="large text-primary">Dashboard</h1>
            <p className="lead">
              <FaUserAlt style={{ marginRight: '7px' }} />
              Welcome {user && user.name}
            </p>
            {profile !== null ? (
              <>
                <Alert />
                <DashboardAction />
                <Experience Experiences={profile.experience} />
                <Education Educations={profile.education} />

                <div className="my-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => dispatch(deleteAccountAction())}
                  >
                    <FaUserMinus
                      style={{ marginRight: '7px', marginTop: '2px' }}
                    />
                    DELETE MY ACCOUNT
                  </button>
                </div>
              </>
            ) : (
              <>
                <p>You have not yet setup a profile, please add some info</p>
                <Link to="/create-profile" className="btn btn-primary my-1">
                  Create profile
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
