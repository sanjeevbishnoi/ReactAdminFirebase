import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import auth from './auth_reducer';
import products from './product_reducer'

export default combineReducers({
  auth,
  products,
  form: formReducer
});