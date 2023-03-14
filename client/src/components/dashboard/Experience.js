import React from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteExperienceAction } from '../../redux/features/profile/profileAction';

const Experience = ({ Experiences }) => {
  const dispatch = useDispatch();
  const experiences = Experiences.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td className="hide-sm">{exp.title}</td>
      <td className="hide-sm">
        <Moment format="DD/MM/YYYY">{exp.from}</Moment> -{' '}
        {exp.to === null ? (
          'Current'
        ) : (
          <Moment format="DD/MM/YYYY">{exp.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteExperienceAction(exp._id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className="my-2">Experience Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Company</th>
            <th className="hide-sm">Title</th>
            <th className="hide-sm">Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </>
  );
};

export default Experience;
