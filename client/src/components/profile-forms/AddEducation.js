import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addEducationAction } from '../../redux/features/profile/profileAction';
import { Link, useNavigate } from 'react-router-dom';

const AddEducation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    fieldofstudy: '',
    from: '',
    to: '',
    current: false,
    description: '',
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const { school, degree, fieldofstudy, from, to, current, description } =
    formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(addEducationAction(formData, navigate));
  };

  return (
    <>
      <section className="container">
        <h1 className="large text-primary">Add Your Education</h1>
        <p className="lead">
          <i className="fas fa-code-branch"></i> Add any School or Bootcamp that
          you have attanded
        </p>
        <small>* required field</small>
        {/* FORM */}
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          {/* school*/}
          <div className="form-group">
            <input
              type="text"
              placeholder="* School or Bootcamp"
              name="school"
              value={school}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          {/* degree */}
          <div className="form-group">
            <input
              type="text"
              placeholder="* Degree or Certificate"
              name="degree"
              value={degree}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          {/* fieldofstudy */}
          <div className="form-group">
            <input
              type="text"
              placeholder="* Field of Study"
              name="fieldofstudy"
              value={fieldofstudy}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          {/* from date */}
          <div className="form-group">
            <h4>From Date</h4>
            <input
              type="date"
              name="from"
              value={from}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          {/* current */}
          <div className="form-group">
            <p>
              <input
                type="checkbox"
                name="current"
                value={current}
                checked={current}
                onChange={(e) => {
                  setFormData({ ...formData, current: !current });
                  toggleDisabled(!toDateDisabled);
                }}
              />{' '}
              Current
            </p>
          </div>
          {/* to date */}
          <div className="form-group">
            <h4>To Date</h4>
            <input
              type="date"
              name="to"
              value={to}
              onChange={(e) => onChange(e)}
              disabled={toDateDisabled ? 'disabled' : ''}
            />
          </div>
          {/* desc */}
          <div className="form-group">
            <textarea
              name="description"
              cols="30"
              rows="5"
              placeholder="Program Description"
              value={description}
              onChange={(e) => onChange(e)}
            ></textarea>
          </div>
          {/* submit btn */}
          <input type="submit" className="btn btn-primary my-1" />
          {/* back btn */}
          <Link className="btn btn-light my-1" to="/dashboard">
            Go Back
          </Link>
        </form>
      </section>
    </>
  );
};

export default AddEducation;
