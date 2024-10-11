import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';

const AddDoctorModal = ({ show, handleClose }) => {
  const [doctor, setDoctor] = useState({
    name: '',
    specialty: '',
    location: ''
  });
  const [error, setError] = useState({});




  /*Validation Function */
  const validateFields = () => {
    const errors = {};
    const namePattern = /^[A-Za-z\s]+$/;

    if (!doctor.name) {
      errors.name = "Enter doctor's name";
    } else if (doctor.name.length < 3) {
      errors.name = "Name must be at least 3 characters long";
    } else if (!isNaN(doctor.name[0])) {
      errors.name = "Name cannot start with a number";
    } else if (!namePattern.test(doctor.name)) {
      errors.name = "Name can only contain letters and spaces";
    }

    if (!doctor.specialty) {
      errors.specialty = "Enter specialty";
    } else if (doctor.specialty.length < 3) {
      errors.specialty = "Specialty must be at least 3 characters long";
    } else if (!isNaN(doctor.specialty[0])) {
      errors.specialty = "Specialty cannot start with a number";
    } else if (!namePattern.test(doctor.specialty)) {
      errors.specialty = "Specialty can only contain letters and spaces";
    }

    if (!doctor.location) {
      errors.location = "Enter location";
    } else if (doctor.location.length < 3) {
      errors.location = "Location must be at least 3 characters long";
    } else if (!isNaN(doctor.location[0])) {
      errors.location = "Location cannot start with a number";
    } else if (!namePattern.test(doctor.location)) {
      errors.location = "Location can only contain letters and spaces";
    }

    return errors;
  };


   /*OnChange input Function*/
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDoctor((prev) => ({
      ...prev,
      [name]: value
    }));
    setError((prev) => ({
      ...prev,
      [name]: ''
    }));
  };


 /*AddDoctor Function */
  const handleAddDoctor = (e) => {
    e.preventDefault();

    const validationErrors = validateFields();
    setError(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    const doctors = JSON.parse(localStorage.getItem('doctors')) || [];
    doctors.push(doctor);
    localStorage.setItem('doctors', JSON.stringify(doctors));

    toast.success("Doc. Added in LocStorage!", {
      toastId: "add-doctor-toast",
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      className: 'custom-toast',
    });

    setDoctor({ name: '', specialty: '', location: '' });
    handleClose();
  };

  useEffect(() => {
    if (!show) {
      setDoctor({ name: '', specialty: '', location: '' });
      setError({});
    }
  }, [show]);

  return (
    <Modal show={show} onHide={handleClose} centered className="custom-modal">
      <Modal.Header closeButton className="modal-header">
        <Modal.Title className="modal-title">
          Add New Doctor
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleAddDoctor}>
          <Form.Group controlId="doctorName" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter doctor's name"
              name="name"
              value={doctor.name}
              onChange={handleInputChange}
              isInvalid={!!error.name}
              className="doctor-input"
            />
            <Form.Control.Feedback type="invalid">{error.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="doctorSpecialty" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter specialty"
              name="specialty"
              value={doctor.specialty}
              onChange={handleInputChange}
              isInvalid={!!error.specialty}
              className="specialty-input"
            />
            <Form.Control.Feedback type="invalid">{error.specialty}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="doctorLocation" className="mb-3">
            <Form.Control
              type="text"
              placeholder="Enter location"
              name="location"
              value={doctor.location}
              onChange={handleInputChange}
              isInvalid={!!error.location}
              className="location-input"
            />
            <Form.Control.Feedback type="invalid">{error.location}</Form.Control.Feedback>
          </Form.Group>
          <Button className="add-doctor-button" type="submit">
             Add Doctor
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddDoctorModal;
