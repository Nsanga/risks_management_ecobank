import { all } from 'redux-saga/effects';
import AccountSaga from 'redux/accountManagement/saga';
import CampaignSaga from 'redux/campagne/saga';
import LoginSaga from 'redux/login/saga';
import PlateformeSaga from 'redux/plateforme/saga';
import ServiceSaga from 'redux/service/saga';
import UserSaga from 'redux/user/saga';

/**
 * @description combine sagas
 */
export default function* Sagas() {
  yield all([
    PlateformeSaga(),
    ServiceSaga(),
    CampaignSaga(),
    UserSaga(),
    AccountSaga(),
    LoginSaga()
  ]);
}
