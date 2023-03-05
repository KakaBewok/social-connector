import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt, FaBlackTie } from 'react-icons/fa';
import { ImBooks } from 'react-icons/im';

const DashboardAction = () => {
  return (
    <>
      <div className="dash-buttons">
        <Link to="/edit-profile" className="btn btn-light">
          <FaUserAlt style={{ marginRight: '5px' }} /> Edit Profile
        </Link>
        <Link to="/add-experience" className="btn btn-light">
          <FaBlackTie style={{ marginRight: '5px' }} /> Add Experience
        </Link>
        <Link to="/add-education" className="btn btn-light">
          <ImBooks style={{ marginRight: '5px' }} /> Add Education
        </Link>
      </div>
    </>
  );
};

export default DashboardAction;
