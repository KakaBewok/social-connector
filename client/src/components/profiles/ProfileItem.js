/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const ProfileItem = ({ profile }) => {
  const { _id, name, avatar } = profile.user;
  const { status, company, location } = profile;

  return (
    <>
      <div className="max-w-sm w-[85%] sm:w-[20rem] md:w-[20rem] lg:w-[22rem] rounded-md mx-auto my-11 shadow-xl p-5">
        {/* profile */}
        <div className="w-full py-5">
          <img
            className="rounded-full w-44 border-slate-200 border-4 mx-auto hover:opacity-90 transition-all duration-500"
            src={avatar}
            alt={name}
          />
          <div className="text-center flex flex-col gap-2 mt-4">
            <h2 className="font-bold text-3xl">{name}</h2>
            <p className="text-sm">
              {status} {company && <span>at {company}</span>}
            </p>
            <p className="text-sm">{location && <span>{location}</span>}</p>
            <Link
              to={`/profile/${_id}`}
              className="btn btn-primary mx-auto text-white mt-2 bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] border-none tracking-wider capitalize hover:opacity-80"
            >
              View Profile
            </Link>
          </div>
        </div>
        {/* skills */}
        {/* <div className="w-1/2 border border-blue-500">
          <h2 className="text-center font-bold text-2xl pt-5 pb-10 tracking-wider">
            Skill Set
          </h2>
          <div className="flex flex-wrap gap-5">
            {skills.slice(0, 5).map((skill, index) => (
              <div
                key={index}
                className="text-xs font-medium shadow-md bg-[#736EFE] px-4 py-2 rounded-md text-white"
              >
                {skill}
              </div>
            ))}
          </div>
          <li>
            {skills.length > 4 ? (
              <>
                <Link to={`/profile/${_id}`}> . . . . .</Link>
              </>
            ) : (
              ''
            )}
          </li>
        </div> */}
      </div>
    </>
  );
};

export default ProfileItem;
