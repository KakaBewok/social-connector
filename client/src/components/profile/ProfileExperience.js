import React from 'react';
import Moment from 'react-moment';

const ProfileExperience = ({ experience }) => {
  const { company, title, location, current, to, from, description } =
    experience;

  return (
    <>
      <h3 className="text-dark">{company}</h3>
      <p>
        <Moment format="DD/MM/YYYY">{from}</Moment> -{' '}
        {!to ? (
          'Current'
        ) : (
          <>
            <Moment format="DD/MM/YYYY">{to}</Moment>
          </>
        )}
      </p>
      <p>
        <strong>Position: </strong> {title}
      </p>
      <p style={{ marginBottom: '32px' }}>
        <strong>description: </strong> {description}
      </p>
    </>
  );
};

export default ProfileExperience;
