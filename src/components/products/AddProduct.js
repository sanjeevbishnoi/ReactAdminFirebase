import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';

import { createUser } from '../../actions';

import NavBar from '../NavBar';
import AddProductForm from './AddProductForm';

class AddProduct extends React.Component {

  state = { loading: false, error: '' };

  onSubmit = (values) => {
    this.setState({ loading: true });
    this.props.createUser(values);
  }

  componentWillReceiveProps(nextProps) {
    const { loggedIn } = nextProps.auth;
    
    if (!loggedIn) {
      this.setState({ error: nextProps.auth.error });
    }
  }

  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }

  render() {
    return (
       <div style={{padding:'10px'}}> 
         <div className='header'>
        <h1>Add Product</h1>
        {/* <nav className='headerNav pullRight'>
          <div className='accountMenu'>
            <button className='btnCommon' onClick={this.props.onAddClick}>Add New Proudct</button>
          </div>
        </nav> */}
      </div>

        <div className='container mainContainer'>
          
            
            <div  className='vCard'>
             
              {this.renderError()}
              <AddProductForm onSubmit={this.onSubmit} />
            </div>
          
        </div>     
      </div>    
    );  
  }
}

const mapStateToProps = state => ({
  form: state.form,
  auth: state.auth
})

export default connect(mapStateToProps, { createUser } )(AddProduct);