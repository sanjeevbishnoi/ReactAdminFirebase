import React from 'react'
import { Icon, Label, Menu, Table,Container } from 'semantic-ui-react'
import Header from '../components/Header';
import UserList from '../components/Auth/UserList';

export default class Customers extends React.Component{

  constructor(props){
    super(props);
  }
  render(){
    return(<UserList />);

  }
}