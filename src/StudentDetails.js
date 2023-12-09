import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const StudentDetails = () => {
  const { id } = useParams();
  const student = useSelector((state) =>
    state.students.find((s) => s.id === id)
  );

  if (!student) {
    return <div>Student not found</div>;
  }

  const detailStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
  };

  const labelStyle = {
    display: 'block',
    fontWeight: 'bold',
    marginBottom: '5px',
  };

  const valueStyle = {
    fontSize: '16px',
  };

  return (
    <div style={detailStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Student Details: {student.firstName} {student.lastName}
      </h2>
      <p style={labelStyle}>Father's Name:</p>
      <p style={valueStyle}>{student.fatherName}</p>

      <p style={labelStyle}>Email:</p>
      <p style={valueStyle}>{student.email}</p>

      <p style={labelStyle}>Address:</p>
      <p style={valueStyle}>{student.address}</p>

      <p style={labelStyle}>Mobile Number:</p>
      <p style={valueStyle}>{student.mobile}</p>

      <p style={labelStyle}>Gender:</p>
      <p style={valueStyle}>{student.gender}</p>

      <p style={labelStyle}>Date of Birth:</p>
      <p style={valueStyle}>{student.dob}</p>

      <p style={labelStyle}>Country:</p>
      <p style={valueStyle}>{student.country}</p>
    </div>
  );
};

export default StudentDetails;
