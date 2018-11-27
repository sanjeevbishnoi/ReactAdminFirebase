import React from 'react';
import ProductList from '../components/products/ProductList'

export default class Products extends React.Component{

constructor(props){
    super(props);
  }

  render(){
    return (<ProductList onAddClick={this.onAddClick}  history={this.props.history} />);
  }

  onAddClick=()=>{
    this.props.history.push('products/addproduct');
  }
}
