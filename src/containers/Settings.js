import React from 'react';
import Header from '../components/Header';
import firebase from 'firebase';
import SettingsUpdate from '../components/Auth/SettingsUpdate'
export class Settings extends React.Component{

constructor(props){
  super(props)
  this.state={
    name:'',
    email:'',
    password:'',
    photoUrl:'',
    emailVerified:'',
    user:null
  }
}
componentWillMount(){
  // firebase.auth().onAuthStateChanged(user =>{
  //   if (user) {
  //     this.setState({email:user.email, password:user.password});

  //     // User is signed in.
  //   } else {
  //     // No user is signed in.
  //   }
  // });

  var user = firebase.auth().currentUser;
  if(user!=null){
    this.setState(
      {
        user:user,
        name:user.displayName,
        email:user.email,
        password:user.password,
        photoUrl:user.photoURL,
        emailVerified:user.emailVerified
      });
  }
}

render(){
    return(<div className='settingsContainer'>
    <Header pageTitle='Settings' />
    <div className='mainContainer'>
      {/* <h5>Logged in as <b>{this.state.name?this.state.name:'Admin'}</b></h5> */}
      <SettingsUpdate user={this.state.user}/>


    </div>
  </div>);
}
}

export default Settings;