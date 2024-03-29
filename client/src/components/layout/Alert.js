/* eslint-disable array-callback-return */
/* eslint-disable no-unreachable */
import React from 'react';
import { useSelector } from 'react-redux';
// import { setAlert } from '../../actions/alert';

const Alert = () => {
  // const alerts = useSelector((state) => state.alert);
  const alerts = useSelector((state) => state.alertSlice);

  return (
    <>
      {/* memeriksa keberadaan state alert */}

      {alerts !== null && alerts.length > 0 ? (
        alerts.map((alert) => (
          <div className={`alert alert-${alert.alertType}`} key={alert.id}>
            {alert.msg}
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default Alert;
