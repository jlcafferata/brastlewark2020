import {combineReducers} from 'redux';
import {localizeReducer} from 'react-localize-redux';
import {activeReducer} from 'redux-active';
import gnomeFilterReducer from './gnomeFilterReducer';
import gnomeDataReducer from './gnomeDataReducer';

export default combineReducers({
  localize: localizeReducer,
  isActive: activeReducer,
  gnomeFilters: gnomeFilterReducer,
  gnomeData: gnomeDataReducer,
});
