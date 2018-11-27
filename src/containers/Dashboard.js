import React from 'react';
import { Route } from 'react-router-dom';

import Menu from './Menu';
import Main from './Main';
import Profile from './Profile';
import Products from './Products';
import Shop from './Shop';
import Customers from './Customers';
import Orders from './Orders';
import Analytics from './Analytics';
import Settings from './Settings';
import AddProduct from '../components/products/AddProduct';
import AddProductImage from '../utils/firebasefileuploader';

const Dashboard = (props) => 
  <div className='fluid-container'>
    <div className='row'>
      <div className='aside col-md-2 col-sm-3 sidebarMenu'>
        <Menu />
      </div>
      <div className='main col-md-10'>       
        <div className='fluid-container'>
          <Route exact path='/' component={Main} />
          <Route exact path='/products' component={Products}  history={props.history} />
          <Route path='/customers' component={Customers} />
          <Route path='/orders' component={Orders} />
          <Route path='/analytics' component={Analytics} />
          <Route path='/settings' component={Settings} />
          <Route exact path='/products/addproduct' component={AddProduct} />
          <Route exact path='/addProductImage' component={AddProductImage} />
        </div>
      </div> 
    </div> 
  </div>;

export default Dashboard;