import { combineReducers } from 'redux';

import modalReducer from './modal_reducer';
import modalParamsReducer from './moda_params_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  modalParams: modalParamsReducer
});

export default uiReducer