import { createStore } from 'redux';
import studentReducer from './studentReducer'; // Import your reducer

const store = createStore(studentReducer);

export default store;
