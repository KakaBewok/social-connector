/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getProfileByIDAction } from '../../redux/features/profile/profileAction';
import { useParams, Link } from 'react-router-dom';
import ProfileTop from './ProfileTop';
import ProfileAbout from './ProfileAbout';
import ProfileExperience from './ProfileExperience';
import ProfileEducation from './ProfileEducation';
import ProfileGithub from './ProfileGithub';

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
            <div className="profile-grid my-1">
              <ProfileTop profile={profile} />
              <ProfileAbout profile={profile} />
              {/* profile experience */}
              <div className="profile-exp bg-white p-2">
                <h2 className="text-primary">Experience</h2>
                {profile.experience.length > 0 ? (
                  <>
                    {profile.experience.map((exp) => (
                      <ProfileExperience key={exp._id} experience={exp} />
                    ))}
                  </>
                ) : (
                  <>No experience credential</>
                )}
              </div>
              {/* profile education */}
              <div className="profile-edu bg-white p-2">
                <h2 className="text-primary">Education</h2>
                {profile.education.length > 0 ? (
                  <>
                    {profile.education.map((edu) => (
                      <ProfileEducation key={edu._id} education={edu} />
                    ))}
                  </>
                ) : (
                  <>No Education credential</>
                )}
              </div>
              {/* profile github */}
              {profile.githubusername && (
                <ProfileGithub username={profile.githubusername} />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Profile;
