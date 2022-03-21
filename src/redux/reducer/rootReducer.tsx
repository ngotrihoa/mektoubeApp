import {combineReducers} from 'redux';
import authReducer from './authReducer';
import homeReducer from './homeReducer';
import signupReducer from './signupReducer';
import uiReducer from './uiReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  signup: signupReducer,
  home: homeReducer,
});

export default rootReducer;
