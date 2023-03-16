/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/features/auth/authAction';

const Navbar = () => {
  const { isAuthenticated, loading, user } = useSelector(
    (state) => state.authSlice
  );
  const { profile } = useSelector((state) => state.profileSlice);

  const userCredentials = user !== null ? user : '';
  const { _id, avatar, name } = userCredentials;

  // const profileUser = profile !== null ? profile : '';

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logoutAction());
    navigate('/login');
  };

  const authLinks = (
    <div className="navbar bg-base-100 bg-transparent backdrop-blur-sm">
      {/* brand */}
      <div className="flex-1">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] ml-3 normal-case text-lg md:text-2xl font-bold hover:translate-x-1 transition-all duration-300">
          <Link to="/dashboard">DevConnector /{'>'}</Link>
        </h1>
      </div>
      <div className="flex-none mr-5">
        {/* menu md*/}
        <div className="dropdown dropdown-end hidden md:block">
          <ul className="flex justify-evenly text-lg font-medium mr-3 w-80">
            <li className="hover:-translate-x-1 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE]">
              <Link to="/profiles">Developers</Link>
            </li>
            <li className="hover:-translate-x-1 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE]">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="hover:-translate-x-1 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE]">
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </div>
        {/* menu < sm */}
        <div className="dropdown dropdown-end md:hidden">
          <button className="btn btn-ghost capitalize font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#736EFE"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:-translate-x-1  transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] font-semibold">
              <Link to="/profiles">Developers</Link>
            </li>
            <li className="hover:-translate-x-1 hover:text-slate-700 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] font-semibold">
              <Link to="/posts">Posts</Link>
            </li>
            <li className="hover:-translate-x-1 hover:text-slate-700 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] font-semibold">
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <hr className="my-2" />

            {profile !== null ? (
              <>
                <li className="text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] font-semibold">
                  <Link to={`/profile/${_id}`}>Profile</Link>
                </li>
                <li className="text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] font-semibold">
                  <Link to={`/edit-profile`}>Edit Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className="tooltip tooltip-top text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] font-semibold"
                  data-tip="You don't have profile"
                >
                  <p>Profile</p>
                </li>
                <li
                  className="tooltip tooltip-top text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] font-semibold"
                  data-tip="You don't have profile"
                >
                  <p>Edit Profile </p>
                </li>
              </>
            )}

            <li>
              <button
                onClick={logoutHandler}
                className="btn btn-secondary text-white mt-2 bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] border-none tracking-wider capitalize"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
        {/* profile menu md*/}
        <div className="dropdown dropdown-end hidden md:block">
          {/* picture */}
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src={avatar} alt={name} />
            </div>
          </label>
          {/* menu */}
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {profile !== null ? (
              <>
                <li className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] font-bold">
                  <Link to={`/profile/${_id}`}>Profile</Link>
                </li>
                <li className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] font-bold">
                  <Link to={`/edit-profile`}>Edit Profile</Link>
                </li>
              </>
            ) : (
              <>
                <li
                  className="tooltip tooltip-top"
                  data-tip="You don't have profile"
                >
                  <p>Profile</p>
                </li>
                <li
                  className="tooltip tooltip-top"
                  data-tip="You don't have profile"
                >
                  <p>Edit Profile </p>
                </li>
              </>
            )}
            <li>
              <button
                onClick={logoutHandler}
                className="btn btn-secondary  text-white mt-2 bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] border-none tracking-wider capitalize"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const guestLinks = (
    <div className="navbar bg-base-100 bg-transparent backdrop-blur-md">
      {/* brand */}
      <div className="flex-1">
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] ml-3 normal-case text-lg md:text-2xl font-bold hover:translate-x-1 transition-all duration-300">
          <Link to="/">DevConnector /{'>'}</Link>
        </h1>
      </div>
      <div className="flex-none mr-3">
        {/* menu md*/}
        <div className="dropdown dropdown-end hidden md:block">
          <ul className="flex justify-evenly items-center text-lg font-semibold w-80">
            <li className="hover:-translate-x-1 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] ">
              <Link to="/profiles">Developers</Link>
            </li>
            <li>
              <Link to="/login">
                <button className="btn btn-ghost font-semibold capitalize text-lg text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] hover:-translate-x-1 transition-all duration-300">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <button className="btn btn-active btn-primary capitalize text-md font-semibold hover:opacity-80 bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] border-none tracking-wider">
                  Register
                </button>
              </Link>
            </li>
          </ul>
        </div>
        {/* menu < sm */}
        <div className="dropdown dropdown-end md:hidden">
          <button className="btn btn-ghost capitalize font-semibold ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2 "
              width="32"
              height="32"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#736EFE"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li className="hover:-translate-x-1 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] font-bold">
              <Link to="/profiles">Developers</Link>
            </li>
            <li className="hover:-translate-x-1 hover:text-slate-500 transition-all duration-300 text-transparent bg-clip-text bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] font-bold">
              <Link to="/login">Login</Link>
            </li>
            <li>
              <button className="btn btn-active btn-primary capitalize text-lg font-semibold text-white mt-2 bg-gradient-to-r from-[#5EFCE8]  to-[#736EFE] border-none tracking-wider">
                <Link to="/register">Register</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {!loading && (
        <div className="fixed top-0 left-0 right-0">
          {isAuthenticated ? authLinks : guestLinks}
        </div>
      )}
    </>
  );
};

export default Navbar;
