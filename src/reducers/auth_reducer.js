import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAIL,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAIL,
  FORGOT_PWD_SUCCESS,
  FORGOT_PWD_FAIL,
  USER_LIST_SUCCESS,
  USER_LIST_FAIL
} from '../actions/types';

const initialState = {
  loggedIn: false,
  user: null,
  error: '',
  msg:'',
  userList:null
}
export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { loggedIn: true, user: action.payload };
    case LOGIN_FAIL:
      return { loggedIn: false, error: action.payload };
    case LOGOUT:
      return initialState;
    case CREATE_USER_SUCCESS:
      return { loggedIn: true, user: action.payload };
    case CREATE_USER_SUCCESS:
      return { loggedIn: true, user: action.payload };
    case CREATE_USER_FAIL:
      return { loggedIn: false, error: action.payload };
    case UPDATE_USER_SUCCESS:
      return { msg: action.payload,error:''};
    case UPDATE_USER_FAIL:
      return { error: action.payload };
    case FORGOT_PWD_SUCCESS:
      return { msg: action.payload.msg,error:''};
    case FORGOT_PWD_FAIL:
      return { msg: '',error:action.payload}; 
    case USER_LIST_SUCCESS:
      return { msg: '',userList:action.payload};   
      
    default: 
      return state;
  }
}