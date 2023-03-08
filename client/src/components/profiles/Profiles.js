/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfilesAction } from '../../redux/features/profile/profileAction';
import { AiOutlineBranches } from 'react-icons/ai';

const Profiles = () => {
  const dispatch = useDispatch();
  const { profiles, loading } = useSelector((state) => state.profileSlice);

  useEffect(() => {
    dispatch(getProfilesAction());
  }, []);

  return (
    <>
      {loading ? (
        <div className="container">
          <Spinner />
        </div>
      ) : (
        <>
          <div className="container">
            <h1 className="large text-primary">Profiles</h1>
            <p className="lead">
              <AiOutlineBranches
                style={{ paddingTop: '4px', marginRight: '4px' }}
              />
              Browse and connect with developers
            </p>
            <div className="profiles">
              {profiles.length > 0 ? (
                <>
                  {profiles.map((profile) => (
                    <ProfileItem key={profile.id} profile={profile} />
                  ))}
                </>
              ) : (
                <h1>No profiles found ...</h1>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profiles;
