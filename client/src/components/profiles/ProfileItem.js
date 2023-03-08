import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCheck } from 'react-icons/ai';

const ProfileItem = ({ profile }) => {
  const { _id, name, avatar } = profile.user;
  const { status, company, location, skills } = profile;

  return (
    <>
      <div className="profile bg-light">
        <img className="round-img" src={avatar} alt={name} />
        <div>
          <h2>{name}</h2>
          <p>
            {status} {company && <span>at {company}</span>}
          </p>
          <p className="my-1">{location && <span>{location}</span>}</p>
          <Link to={`/profile/${_id}`} className="btn btn-primary">
            View Profile
          </Link>
        </div>
        <ul>
          {/* hanya menampilkan 4 skill saja dengan method slice() */}
          {skills.slice(0, 4).map((skill, index) => (
            <li key={index} className="text-primary">
              <AiOutlineCheck /> {skill}
            </li>
          ))}
          <li>
            {skills.length > 4 ? (
              <>
                <Link to={`/profile/${_id}`}>. . . . .</Link>
              </>
            ) : (
              ''
            )}
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileItem;
