import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import propertyReducer from './propertyReducer';


export default combineReducers({
  properties: propertyReducer
});
