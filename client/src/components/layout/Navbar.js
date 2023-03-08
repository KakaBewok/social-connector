import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/features/auth/authAction';
import { FiLogOut } from 'react-icons/fi';
import { FaUserAlt } from 'react-icons/fa';

const Navbar = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.authSlice);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutAction());
    navigate('/login');
  };

  const authLinks = (
    <>
      <h1>
        <Link to="/dashboard">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FaUserAlt style={{ marginRight: '7px' }} />
            <span className="hide-sm">Dashboard</span>
          </Link>
        </li>
        <li>
          <a onClick={logoutHandler} href="#!">
            <FiLogOut /> <span className="hide-sm">Logout</span>
          </a>
        </li>
      </ul>
    </>
  );

  const guestLinks = (
    <>
      <h1>
        <Link to="/">
          <i className="fas fa-code"></i> DevConnector
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/profiles">Developers</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </>
  );

  return (
    <nav className="navbar bg-dark">
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
};

export default Navbar;
