import * as types from './types';

export const loginRequest = (phoneNumber, password) => ({
  type: types.LOGIN_REQUEST,
  payload: {phoneNumber, password},
});

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS,
});