import React, { useState } from 'react';
import { DoctorProvider } from './context/DoctorContext';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Filters from './components/Filters';
import DoctorCollection from './components/DoctorCollection';
import DoctorModal from './components/DoctorModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({ speciality: '', location: '', doctorName: '' });

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const handleSearch = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  return (
    <DoctorProvider>

      {/* Header */}
      <Header />

      <div className="container mt-4">
        {/* Filters and Search */}
        <div className="row mb-1">
          <div className="col-md-4 ">
            <Filters type="speciality" onFilterChange={handleFilterChange} />
          </div>
          <div className="col-md-4 ">
            <Filters type="location" onFilterChange={handleFilterChange} />
          </div>
          <div className="col-md-4">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        {/* Doctor Collection */}
        <div className="row">
          <DoctorCollection filters={filters} onDoctorClick={handleDoctorClick} />
        </div>
      </div>

      {/* Doctor Modal */}
      {selectedDoctor && (
        <DoctorModal show={showModal} handleClose={handleCloseModal} doctor={selectedDoctor} />
      )}

      {/* Toast Notification */}
      <ToastContainer />

    </DoctorProvider>
  );
};

export default App;
