/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileByIDAction } from '../../redux/features/profile/profileAction';
import { useParams, Link } from 'react-router-dom';

const Profile = () => {
  const { _id } = useParams();
  const dispatch = useDispatch();

  const { profile, loading } = useSelector((state) => state.profileSlice);
  const { isAuthenticated, user } = useSelector((state) => state.authSlice);

  useEffect(() => {
    dispatch(getProfileByIDAction(_id));
  }, []);

  return (
    <>
      <div className="container">
        {profile === null || loading ? (
          <Spinner />
        ) : (
          <>
            <Link to="/profiles" className="btn btn-light">
              Back to Profiles
            </Link>
            {isAuthenticated &&
              loading === false &&
              user._id === profile.user._id && (
                <Link to="/edit-profile" className="btn btn-dark">
                  Edit Profile
                </Link>
              )}
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
