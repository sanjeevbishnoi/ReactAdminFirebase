import React from 'react';
import { 
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';

class SettingsForm extends React.Component {

  constructor(props){
   super(props);
   this.props.initialize({ name: props.user.name,email:props.user.email});
  }


  render() {
    const { handleSubmit, submitting,user} = this.props;
   // alert(JSON.stringify(user));


    return (
      <div>
        <Form onSubmit={handleSubmit}>    
          {/* <div className='form-group'>
            <Field 
              label='Name'
              placeholder='*********'
              name='name'
              type='text'
              component={renderField}
            
             
            />
          </div>
          <div className='form-group'>
            <Field
              label='Email'
              placeholder='john@doe.com'
              name='email'
              type='email'
              component={renderField}
              
             
            />
          </div> */}
          <div className='form-group'>
            <Field 
              label='Current Password'
              placeholder='*********'
              name='password'
              type='password'
              component={renderField}
            />
          </div>

           <div className='form-group'>
            <Field 
              label='New Password'
              placeholder='*********'
              name='newpassword'
              type='password'
              component={renderField}
            />
          </div>

          <Button
            disabled={submitting}
            className='btnCommon btnPrimary'
            type='submit'>Update</Button>
        </Form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  // if (!values.name) {
  //   errors.name = 'Required';
  // } else if (values.name.length < 2) {
  //   errors.name = 'Minimum 2 characters';
  // }

  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //   errors.email = 'Invalid Email Address';
  // }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Minimum 6 characters';
  }

  if (!values.newpassword) {
    errors.newpassword = 'Required';
  } else if (values.newpassword.length < 6) {
    errors.newpassword = 'Minimum 6 characters';
  }
  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error,msg }}) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type }  />
    {touched && (error && <p className='error'>{error}</p>)}
    {touched && (msg && <p className='success'>{msg}</p>)}
  </div>
)

SettingsForm = reduxForm({
  form: 'SettingsForm',
  validate
})(SettingsForm);

export default SettingsForm;