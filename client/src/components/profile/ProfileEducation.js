import React from 'react';
import Moment from 'react-moment';

const ProfileEducation = ({ education }) => {
  const { school, degree, fieldofstudy, current, to, from, description } =
    education;

  return (
    <>
      <h3 className="text-dark">{school}</h3>
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
        <strong>Degree: </strong> {degree}
      </p>
      <p>
        <strong>Field: </strong> {fieldofstudy}
      </p>
      <p style={{ marginBottom: '32px' }}>
        <strong>description: </strong> {description}
      </p>
    </>
  );
};

export default ProfileEducation;
