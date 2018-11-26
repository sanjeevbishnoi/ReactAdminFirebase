import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';

import { forgotPassword } from '../../actions';

import NavBar from '../NavBar';
import ForgotPasswordForm from './ForgotPasswordForm';

class Forgot extends React.Component {

  state = { loading: false, error: '',msg:'' };

  onSubmit = (values) => {
    this.setState({ loading: true });
    this.props.forgotPassword(values);
  }

  componentWillReceiveProps(nextProps) {
    
      this.setState({ error: nextProps.auth.error,msg:nextProps.auth.msg});
    
  }

  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }

  renderMsg = () => {
    if (this.state.msg !== '') {
      return <p className='error text-center'>{this.state.msg}</p>;
    }
  }

  render() {
    return (
       <div className='welcomeContainer'>   
        <div className='container mainContainer'>
          <NavBar />
          <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Forgot Password</h1>
              <Divider />
              {this.renderError()}
              {this.renderMsg()}
              <ForgotPasswordForm onSubmit={this.onSubmit} />
            </Card>
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

export default connect(mapStateToProps, { forgotPassword } )(Forgot);