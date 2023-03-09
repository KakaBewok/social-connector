import React from 'react';

const ProfileAbout = ({ profile }) => {
  const {
    bio,
    skills,
    user: { name },
  } = profile;

  return (
    <>
      <div className="profile-about bg-light p-2">
        {/* optional */}
        {bio && (
          <>
            <h2 className="text-primary">
              {name.trim().split(' ').length === 1
                ? name
                : name.trim().split(' ')[0]}
              's Bio
            </h2>
            <p>{bio}</p>
            <div className="line"></div>
          </>
        )}

        <h2 className="text-primary">Skill Set</h2>
        <div className="skills">
          {skills.map((skill, index) => (
            <div className="p-1" key={index}>
              {skill}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProfileAbout;
