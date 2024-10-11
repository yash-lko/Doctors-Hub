
import React from 'react';
import { Modal } from 'react-bootstrap';

const DoctorModal = ({ show, handleClose, doctor }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="modal-dialog-centered"
    >
      <div className="modal-content">

        <Modal.Header closeButton className="doctor-modal-header">
          <Modal.Title className="doctor-modal-title text-center">
            <i className="bi bi-person-md me-2"></i> 
            {doctor?.name}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="doctor-modal-body">
          <p className="doctor-specialty mb-3">
            <strong className="text-dangers">Specialty:</strong> {doctor?.specialty}
          </p>
          <p className="doctor-location mb-3">
            <strong className="text-dangers">Location:</strong> {doctor?.location}
          </p>
          <p className="doctor-rating mb-3">
            <strong className="text-dangers">Rating:</strong> {doctor?.rating} ★
          </p>
          <p className="doctor-phone mb-3">
            <strong className="text-dangers">Phone:</strong> {doctor?.phone}
          </p>
          <p className="doctor-email mb-3">
            <strong className="text-dangers">Email:</strong> {doctor?.email}
          </p>
        </Modal.Body>
      </div>
    </Modal>
  );
};

export default DoctorModal;
