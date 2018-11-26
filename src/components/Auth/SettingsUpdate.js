import React from 'react';
import { connect } from 'react-redux';
import { 
  Card,
  Divider 
} from 'semantic-ui-react';

import { updateUser } from '../../actions';

import NavBar from '../NavBar';
import SettingsForm from './SettingsForm';

class SettingsUpdate extends React.Component {

  constructor(props){
    super(props)
    this.state={
      user:props.user
    }

  }

  state = { loading: false, error: '' };

  onSubmit = (values) => {
    this.setState({ loading: true });
    this.props.updateUser(values);
  }

  componentWillReceiveProps(nextProps) {
    const { error,msg } = nextProps.auth;
      this.setState({ error,msg });
    
  }

  renderError = () => {
    if (this.state.error !== '') {
      return <p className='error text-center'>{this.state.error}</p>;
    }
  }

  renderMessage = () => {
    if (this.state.msg !== '') {  
      return <p className='info text-center'>{this.state.msg}</p>;
    }
  }

  render() {
    return (
       <div>   
        <div className='container mainContainer'>
        
            <div className='authForm'>
            <Card centered className='vCard'>
              {/* <h1>Sign Up</h1>
              <Divider /> */}
              {this.renderError()}
              {this.renderMessage()}
              <SettingsForm onSubmit={this.onSubmit} user={this.state.user} />
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

export default connect(mapStateToProps, { updateUser } )(SettingsUpdate);