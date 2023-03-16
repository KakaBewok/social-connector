/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const { isAuthenticated } = useSelector((state) => state.authSlice);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return navigate('/dashboard');
  }

  return (
    <div
      className="hero h-screen"
      style={{
        backgroundImage: `url("./images/showcase3.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl font-bold">Developer Connector</h1>
          <p className="mb-5">
            Create a developer profile/portfolio, share posts and get help from
            other developers
          </p>
          <div className="flex justify-evenly max-w-[13rem] mx-auto">
            <Link to="/register">
              <button className="btn btn-primary bg-gradient-to-l from-[#5EFCE8]  to-[#736EFE] border-none capitalize hover:opacity-90 tracking-wider">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
