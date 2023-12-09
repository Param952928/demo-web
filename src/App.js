


// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'; // Import Provider
import { createStore } from 'redux';
import studentReducer from './studentReducer'; // Import your reducer
import StudentDetails from './StudentDetails'; // Import the new component


import StudentList from './Viewstudent';
import RegistrationForm from './Addnewstudent';

const store = createStore(studentReducer); // Create Redux store with your reducer

const App = () => {
  const students = [
    { name: 'Student 1' },
    { name: 'Student 2' },
    { name: 'Student 3' },
    // Add more student data here
  ];
  return (
    <Provider store={store}> {/* Wrap your app with Provider */}
      <Router>
        <Routes>

        <Route path="/" element={<StudentList students={students} />} /> {/* Use "element" prop */}
        <Route path="/registration-form" element={<RegistrationForm />} /> {/* Use "element" prop */} 
        <Route path="/student/:id" element={<StudentDetails />} /> {/* Dynamic route */}

               </Routes>
      </Router>
    </Provider>
  );
};

export default App;

