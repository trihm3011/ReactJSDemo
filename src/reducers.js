import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { addressesReducer } from './views/Address/List/reducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  addressList: addressesReducer
});