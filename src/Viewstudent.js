import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './vviewstudent.css'; // Import your CSS file for styling

const mapStateToProps = (state) => ({
  students: state.students,
});

const ViewStudents = ({ students }) => {
  return (
    <div>
      <h2 className="page-title">View Students</h2>
      <Link to="/registration-form" className="add-student-button">
        Add Student
      </Link>
      <table className="student-table">
        <thead>
          <tr>
            <th>Photo</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Father's Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Mobile</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>
                <img
                  src={student.photos[0] ? URL.createObjectURL(student.photos[0]) : ''}
                  alt={`Student ${student.id}`}
                  width="50"
                  height="50"
                />
              </td>
              <td>
                {/* Wrap the student's name with a Link to their details page */}
                <Link to={`/student/${student.id}`}>{student.firstName}</Link>
              </td>
              <td>{student.lastName}</td>
              <td>{student.fatherName}</td>
              <td>{student.email}</td>
              <td>{student.address}</td>
              <td>{student.mobile}</td>
              <td>{student.gender}</td>
              <td>{student.dob}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default connect(mapStateToProps)(ViewStudents);
