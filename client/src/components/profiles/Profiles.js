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
          <div className="my-20">
            <h1 className="text-lg md:text-3xl font-bold ml-8 mb-1 md:mb-3">
              Profiles
            </h1>
            <div className="ml-8 mb-6 flex flex-wrap gap-2 text-sm">
              <AiOutlineBranches className="mt-1" />
              <p>Browse and connect with developers</p>
            </div>
            <div className="flex flex-wrap gap-1 justify-center mx-auto">
              {profiles.length > 0 ? (
                <>
                  {profiles.map((profile) => (
                    <ProfileItem key={profile._id} profile={profile} />
                  ))}
                </>
              ) : (
                <h1 className="absolute top-[50%] font-bold text-2xl">
                  No Profiles Found ...
                </h1>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Profiles;
