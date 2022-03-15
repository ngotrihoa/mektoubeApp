import {combineReducers} from 'redux';
import authReducer from './authReducer';
import signupReducer from './signupReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  signup: signupReducer,
});

export default rootReducer;
