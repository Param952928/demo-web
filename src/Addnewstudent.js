import React, { useState } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; // For generating unique IDs
// import { useHistory } from 'react-router-dom'; // Import useHistory for navigation
import { useNavigate } from 'react-router-dom';


const mapDispatchToProps = (dispatch) => ({
  addStudent: (studentData) =>
    dispatch({ type: 'ADD_STUDENT', payload: { ...studentData, id: uuidv4() } }),
});

const RegistrationForm = ({ addStudent }) => {
  // const history = useHistory(); // Get the history object for navigation
  const navigate = useNavigate();


  const [formData, setFormData] = useState({
    photos: [],
    firstName: '',
    lastName: '',
    fatherName: '',
    email: '',
    address: '',
    mobile: '',
    gender: '',
    dob: '',
    country: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'file' ? files : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(formData);
    // Clear the form after submission
    setFormData({
      photos: [],
      firstName: '',
      lastName: '',
      fatherName: '',
      email: '',
      address: '',
      mobile: '',
      gender: 'Male',
      dob: '',
      country: '',
    });
    navigate('/');

    // Navigate to the Student List page
    // history.push('/'); // Assuming your Student List page is at the root URL
  };

  const formStyle = {
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

  const inputStyle = {
    width: '95%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    fontSize: '16px',
    marginBottom: '15px',
  };

  const selectStyle = {
    ...inputStyle, // Copy the input styles
  };

  const submitButtonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
  };

  return (
    <div style={formStyle}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label style={labelStyle} htmlFor="photos">
          Photos (Multiple):
        </label>
        <input
          style={inputStyle}
          type="file"
          id="photos"
          name="photos"
          multiple
          accept="image/*"
          onChange={handleChange}
        />

        <label style={labelStyle} htmlFor="firstName">
          First Name:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="firstName"
          name="firstName"
          required
          value={formData.firstName}
          onChange={handleChange}
        />

        <label style={labelStyle} htmlFor="lastName">
          Last Name:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="lastName"
          name="lastName"
          required
          value={formData.lastName}
          onChange={handleChange}
        />

        <label style={labelStyle} htmlFor="fatherName">
          Father's Name:
        </label>
        <input
          style={inputStyle}
          type="text"
          id="fatherName"
          name="fatherName"
          required
          value={formData.fatherName}
          onChange={handleChange}
        />

        <label style={labelStyle} htmlFor="email">
          Email:
        </label>
        <input
          style={inputStyle}
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <label style={labelStyle} htmlFor="address">
          Address:
        </label>
        <textarea
          style={inputStyle}
          id="address"
          name="address"
          rows="4"
          required
          value={formData.address}
          onChange={handleChange}
        />

        <label style={labelStyle} htmlFor="mobile">
          Mobile Number:
        </label>
        <input
          style={inputStyle}
          type="tel"
          id="mobile"
          name="mobile"
          pattern="[0-9]{10}"
          required
          value={formData.mobile}
          onChange={handleChange}
        />

        <label style={labelStyle}>Gender:</label>
        <input
          style={{ marginRight: '10px' }}
          type="radio"
          id="male"
          name="gender"
          value="Male"
          checked={formData.gender === 'Male'}
          onChange={handleChange}
        />
        <label htmlFor="male">Male</label>

        <input
          style={{ marginRight: '10px' }}
          type="radio"
          id="female"
          name="gender"
          value="Female"
          checked={formData.gender === 'Female'}
          onChange={handleChange}
        />
        <label htmlFor="female">Female</label>

        <label style={labelStyle} htmlFor="dob">
          Date of Birth:
        </label>
        <input
          style={inputStyle}
          type="date"
          id="dob"
          name="dob"
          required
          value={formData.dob}
          onChange={handleChange}
        />

        <label style={labelStyle} htmlFor="country">
          Country:
        </label>
        <select
          style={selectStyle}
          id="country"
          name="country"
          required
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
        </select>

        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <input style={submitButtonStyle} type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(RegistrationForm);
