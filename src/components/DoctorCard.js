import React from 'react';
const DoctorCard = ({ doctor, onClick }) => {
  return (
    <div
      className="doctor-card card"
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.classList.add('hover');
      }}
      onMouseLeave={(e) => {
        e.currentTarget.classList.remove('hover');
      }}
    >
      <div className="card-body doctor-card-body">
        <h5 className="card-title doctor-card-title">{doctor.name}</h5>
        <p className="card-text doctor-card-text">
          <i className="fa fa-stethoscope icon"></i>
          {doctor.specialty}
        </p>
        <p className="card-text doctor-card-text">
          <i className="fa fa-map-marker icon"></i>
          {doctor.location}
        </p>
        <p className="card-text doctor-card-text">
          <i className="fa fa-star icon"></i>
          {doctor.rating} ★
        </p>
      </div>
    </div>
  );
};

export default DoctorCard;
