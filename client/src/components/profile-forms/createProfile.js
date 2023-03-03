import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { BsTwitter } from 'react-icons/bs';

const CreateProfile = () => {
  const [formData, setFormData] = useState({
    company: '',
    website: '',
    location: '',
    status: '',
    skills: '',
    githubusername: '',
    bio: '',
    twitter: '',
    facebook: '',
    linkedin: '',
    youtube: '',
    instagram: '',
  });

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram,
  } = formData;

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Create Your Profile</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Let's get some information to make
          your profile stand out
        </p>
        <small>* required field</small>
        <form className="form">
          {/* status */}
          <div className="form-group">
            <select name="status" value={status} onChange={(e) => onChange(e)}>
              <option value="0">* Select Professional Status</option>
              <option value="Developer">Developer</option>
              <option value="Junior Developer">Junior Developer</option>
              <option value="Senior Developer">Senior Developer</option>
              <option value="Manager">Manager</option>
              <option value="Student or Learning">Student or Learning</option>
              <option value="Instructor">Instructor or Teacher</option>
              <option value="Intern">Intern</option>
              <option value="Other">Other</option>
            </select>
            <small className="form-text">
              Give us an idea of where you are at in your career
            </small>
          </div>
          {/* company */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Company"
              name="company"
              value={company}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              Could be your own company or one you work for
            </small>
          </div>
          {/* website */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Website"
              name="website"
              value={website}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              Could be your own or a company website
            </small>
          </div>
          {/* location */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Location"
              name="location"
              value={location}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              City & state suggested (eg. Boston, MA)
            </small>
          </div>
          {/* skills */}
          <div className="form-group">
            <input
              type="text"
              placeholder="* Skills"
              name="skills"
              value={skills}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)
            </small>
          </div>
          {/* githubusername */}
          <div className="form-group">
            <input
              type="text"
              placeholder="Github Username"
              name="githubusername"
              value={githubusername}
              onChange={(e) => onChange(e)}
            />
            <small className="form-text">
              If you want your latest repos and a Github link, include your
              username
            </small>
          </div>
          {/* bio */}
          <div className="form-group">
            <textarea
              placeholder="A short bio of yourself"
              name="bio"
              value={bio}
              onChange={(e) => onChange(e)}
            ></textarea>
            <small className="form-text">Tell us a little about yourself</small>
          </div>
          {/* button submit*/}
          <div className="my-2">
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type="button"
              className="btn btn-light"
            >
              Add Social Network Links
            </button>
            <span>Optional</span>
          </div>

          {/* social lists */}
          {displaySocialInputs && (
            <>
              {/* twitter */}
              <div className="form-group social-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-twitter"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#00abfb"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
                </svg>
                <input
                  style={{ marginLeft: '7px' }}
                  type="text"
                  placeholder="Twitter URL"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => onChange(e)}
                />
              </div>
              {/* facebook */}
              <div className="form-group social-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-facebook"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                </svg>
                <input
                  style={{ marginLeft: '7px' }}
                  type="text"
                  placeholder="Facebook URL"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => onChange(e)}
                />
              </div>
              {/* youtube */}
              <div className="form-group social-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-youtube"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fd0061"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="3" y="5" width="18" height="14" rx="4" />
                  <path d="M10 9l5 3l-5 3z" />
                </svg>
                <input
                  style={{ marginLeft: '7px' }}
                  type="text"
                  placeholder="YouTube URL"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => onChange(e)}
                />
              </div>
              {/* linkedin */}
              <div className="form-group social-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-linkedin"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#00abfb"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="2" />
                  <line x1="8" y1="11" x2="8" y2="16" />
                  <line x1="8" y1="8" x2="8" y2="8.01" />
                  <line x1="12" y1="16" x2="12" y2="11" />
                  <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                </svg>
                <input
                  style={{ marginLeft: '7px' }}
                  type="text"
                  placeholder="Linkedin URL"
                  name="linkedin"
                  value={linkedin}
                  onChange={(e) => onChange(e)}
                />
              </div>
              {/* instagram */}
              <div className="form-group social-input">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="icon icon-tabler icon-tabler-brand-instagram"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="#fd0061"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <rect x="4" y="4" width="16" height="16" rx="4" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                </svg>
                <input
                  style={{ marginLeft: '7px' }}
                  type="text"
                  placeholder="Instagram URL"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => onChange(e)}
                />
              </div>
            </>
          )}

          {/* button go back */}
          <input type="submit" className="btn btn-primary my-1" />
          <a className="btn btn-light my-1" href="dashboard.html">
            Go Back
          </a>
        </form>
      </section>
    </>
  );
};

export default CreateProfile;
