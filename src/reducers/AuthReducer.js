import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
    } from '../actions/types';

const INITIAL_STATE = { email: '', password: '', error: '', user: null, loading: false };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
     return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
     return { ...state, password: action.payload };
    case LOGIN_USER:
     return { ...state, loading: true, error: '' };
    case LOGIN_USER_SUCCESS:
     return { ...state, user: action.payload, error: '', loading: false, password: '', email: '' };
    case LOGIN_USER_FAIL:
return { ...state, error: 'Incorrect Email or Passsword', password: '', email: '', loading: false };
    default:
      return state;
  }
};
