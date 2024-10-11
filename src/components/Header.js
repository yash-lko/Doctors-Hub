import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import AddDoctorModal from './AddDoctorModal';


const Header = ({ onAddDoctor }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <header className="header-container">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start">
            <div className="header-content">
              <i className="fas fa-stethoscope header-icon"></i>
              <h1 className="header-title">Doc Hub</h1>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end mt-3 mt-md-0">
            <Button
              onClick={handleShow}
              className="add-doctor-btn"
            >
              Add Doctor
            </Button>
          </div>
        </div>
      </div>

      <AddDoctorModal show={showModal} handleClose={handleClose} onAddDoctor={onAddDoctor} />
    </header>
  );
};

export default Header;
