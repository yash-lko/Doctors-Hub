
import React, { createContext, useState, useEffect } from 'react';
import doctorsData from '../data/doctors.json';

export const DoctorContext = createContext();

export const DoctorProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchDoctors = () => {
      try {

        setDoctors(doctorsData);
      } catch (err) {
        setError({ message: 'Failed to load doctors data.' });
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <DoctorContext.Provider value={{ doctors, loading, error }}>
      {children}
    </DoctorContext.Provider>
  );
};
