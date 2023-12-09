// src/reducers/studentReducer.js

// Initial state
const initialState = {
    students: [],
  };
  
  // Reducer function
  const studentReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_STUDENT':
        const newStudent = {
          id: state.students.length + 1, // Generate a unique ID
          ...action.payload,
        };
        return {
          ...state,
          students: [...state.students, newStudent],
        };
      default:
        return state;
    }
  };
  
  export default studentReducer;
  