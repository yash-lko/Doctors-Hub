import React, { useContext, useEffect, useState } from 'react';
import { DoctorContext } from '../context/DoctorContext';


const Filters = ({ type, onFilterChange }) => {
  const { doctors } = useContext(DoctorContext); 
  const [loading, setLoading] = useState(true); 
  const [options, setOptions] = useState([]); 


   /*Accessing Context for Specialty & Location */
  useEffect(() => {
    const timer = setTimeout(() => {
      const specialties = Array.from(new Set(doctors.map(doctor => doctor.specialty)));
      const locations = Array.from(new Set(doctors.map(doctor => doctor.location)));
      
      setOptions(type === 'speciality' ? specialties : locations); 
      setLoading(false); 
    }, 1000);

    return () => clearTimeout(timer);
  }, [doctors, type]);

  const handleChange = (e) => {
    onFilterChange(type, e.target.value);
  };

  return (
    <div className="filter-wrapper position-relative mb-3">
      <i className="fas fa-filter filter-icon position-absolute"></i>
      <select 
        onChange={handleChange} 
        className="form-select filter-select" 
        disabled={loading}
      >
        <option value="">Select {type === 'speciality' ? 'Specialty' : 'Location'}</option>
        {loading ? (
          <option disabled>Loading...</option> 
        ) : (
          options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))
        )}
      </select>
    </div>
  );
};

export default Filters;
