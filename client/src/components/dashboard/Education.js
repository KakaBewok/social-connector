import React from 'react';
import Moment from 'react-moment';
import { useDispatch } from 'react-redux';
import { deleteEducationAction } from '../../redux/features/profile/profileAction';

const Education = ({ education }) => {
  const dispatch = useDispatch();
  const Educations = education.map((edu) => (
    <tr key={edu.id}>
      <td>{edu.school}</td>
      <td className="hide-sm">{edu.degree}</td>
      <td className="hide-sm">
        <Moment format="DD/MM/YYYY">{edu.from}</Moment> -{' '}
        {edu.to === null ? (
          'Current'
        ) : (
          <Moment format="DD/MM/YYYY">{edu.to}</Moment>
        )}
      </td>
      <td>
        <button
          className="btn btn-danger"
          onClick={() => dispatch(deleteEducationAction(edu.id))}
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <>
      <h2 className="my-2">Education Credentials</h2>
      <table className="table">
        <thead>
          <tr>
            <th>School</th>
            <th className="hide-sm">Degree</th>
            <th className="hide-sm">Years</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{Educations}</tbody>
      </table>
    </>
  );
};

export default Education;
