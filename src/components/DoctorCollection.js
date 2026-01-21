import React, { useContext, useState, useEffect } from 'react';
import { DoctorContext } from '../context/DoctorContext';
import DoctorCard from './DoctorCard';
import { Pagination, Spinner } from 'react-bootstrap';

const DoctorCollection = ({ filters, onDoctorClick }) => {
  const { doctors, loading: initialLoading } = useContext(DoctorContext);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [doctorsPerPage] = useState(8);

  const filteredDoctors = doctors?.filter((doctor) => {
    return (
      (filters.speciality ? doctor.specialty === filters.speciality : true) &&
      (filters.location ? doctor.location === filters.location : true) &&
      (filters.doctorName ? doctor.name.toLowerCase().includes(filters.doctorName.toLowerCase()) : true)
    );
  }) || [];

  const totalPages = Math.ceil(filteredDoctors.length / doctorsPerPage);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [totalPages, currentPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(initialLoading);
    }, 1000);

    return () => clearTimeout(timer);
  }, [initialLoading]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status" className="mb-3 custom-spinner text-danger">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="text-muted">Please wait a moment while we fetch the doctors.</p>
      </div>
    );
  }

  const hasNoDoctors = !doctors || doctors.length === 0;

  if (hasNoDoctors && !filters.speciality && !filters.location && !filters.doctorName) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-danger">Something Went Wrong</h2>
        <p className="text-muted">Please try refreshing the page.</p>
      </div>
    );
  }

  if (filteredDoctors.length === 0 && (filters.speciality || filters.location || filters.doctorName)) {
    return (
      <div className="text-center mt-5">
        <h2 className="text-danger">No Doctors Match Your Search Criteria</h2>
        <p className="text-muted">Please try adjusting your filters or search terms.</p>
      </div>
    );
  }

  const indexOfLastDoctor = currentPage * doctorsPerPage;
  const indexOfFirstDoctor = indexOfLastDoctor - doctorsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstDoctor, indexOfLastDoctor);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="doctor-collection-container">
      <div className="row doctor-card-row">
        {currentDoctors.map((doctor) => (
          <div key={doctor.id} className="col-md-3 mb-4">
            <DoctorCard doctor={doctor} onClick={() => onDoctorClick(doctor)} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination className="justify-content-center custom-pagination">
          <Pagination.Prev
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="custom-pagination-prev"
          >
            <i className="fas fa-chevron-left"></i> 
          </Pagination.Prev>
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
              className={`custom-pagination-item ${index + 1 === currentPage ? 'active' : ''}`}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="custom-pagination-next"
          >
            <i className="fas fa-chevron-right"></i> 
          </Pagination.Next>
        </Pagination>
      )}
    </div>
  );
};

export default DoctorCollection;
