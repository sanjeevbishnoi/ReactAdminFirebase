import firebase from 'firebase';

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
} from './types';

export const createUser = (values) => async (dispatch) => {
  const { name, email, password } = values;

  try {
    let authUser = await firebase.auth().createUserWithEmailAndPassword(email, password);

    await firebase.database().ref(`users/${authUser.uid}`).set({
      email,
      name
    });

    dispatch({ type: CREATE_USER_SUCCESS, payload: authUser });

  } catch (err) {
    console.log(err)
    let errorMessage = '';

    switch (err.code) {
      case 'auth/email-already-in-use':
        errorMessage = 'Email is already in use.'
        break;
      default: 
        errorMessage = 'Cannot create new account. Please try again.';
    }   

    dispatch({ type: CREATE_USER_FAIL, payload: errorMessage });
  }
};

export const updateUser = (values) => async (dispatch) => { 
  const {password,newpassword } = values;
  firebase.auth().currentUser.reauthenticateWithCredential(
    firebase.auth.EmailAuthProvider.credential(
      firebase.auth().currentUser.email, 
      password
    )
  ).then(()=>{

    try {
      firebase.auth().currentUser.updatePassword(newpassword).then(()=>{
      dispatch({ type: UPDATE_USER_SUCCESS, payload: "User updated successfully" });
      }).catch((error)=>{
      dispatch({ type: UPDATE_USER_FAIL, payload: "update password failed" });
      });

    } catch (err) {
      console.log(err)
      let errorMessage = '';
      switch (err.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Email is already in use.'
          break;
        default: 
          errorMessage = 'Cannot create new account. Please try again.';
      }   
      dispatch({ type: UPDATE_USER_FAIL, payload: errorMessage });
    }

  }).catch((err)=>{
    let errorMessage = '';
  
      switch (err.code) {
        case ' auth/wrong-password':
          errorMessage = 'The password is invalid or the user does not have a password'
          break;
        default: 
          errorMessage = 'Current password provided is wrong';
      }   
      dispatch({ type: UPDATE_USER_FAIL, payload: errorMessage });
  });
  


};

export const signIn = (values) => async (dispatch) => {
  const { email, password } = values;
  try {
    let user = await firebase.auth().signInWithEmailAndPassword(email, password);

    dispatch({ type: LOGIN_SUCCESS, payload: user });
    
  } catch (err) {
    console.log(err);

    dispatch({ type: LOGIN_FAIL, payload: err});
  }
};

export const forgotPassword = (values) => async (dispatch) => {
  const { email} = values;
  try {
    firebase.auth().sendPasswordResetEmail(email).then(()=>{
      dispatch({ type: FORGOT_PWD_SUCCESS, payload: {msg:'Check your email for reset password instructions'}});
    }).catch((err)=>{

      console.log(err);
      dispatch({ type: FORGOT_PWD_FAIL, payload:err});
    });    
  } catch (err) {
    console.log(err);
    dispatch({ type: FORGOT_PWD_FAIL, payload: err});
  }
};

export const signOut = () => dispatch => {
  firebase.auth().signOut();
  dispatch({ type: LOGOUT });
}

export const getAllUsers = () => dispatch => {
  firebase.database().ref('users/').once("value").then(((snapShot)=>{
    let users=[];
   snapShot.forEach((item=>{
    users.push({key:item.key,name:item.val().name,email:item.val().email} );
   }));
   console.log(users);
   dispatch({ type: USER_LIST_SUCCESS, payload: users});
  }));
}