import { combineReducers } from 'redux';
import AccountReducer from 'redux/accountManagement/reducer';
import CampaignReducer from 'redux/campagne/reducer';
import LoginReducer from 'redux/login/reducer';
import PlateformeReducer from 'redux/plateforme/reducer';
import ServiceReducer from 'redux/service/reducer';
import UserReducer from 'redux/user/reducer';

/**
 * @description combine reducers
 */
const rootReducer = combineReducers({
  PlateformeReducer,
  ServiceReducer,
  CampaignReducer,
  UserReducer,
  AccountReducer,
  LoginReducer
});

export default rootReducer;
