import React from 'react';
import {
  Form,
  Button,
  Image
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import DropZoneField from '../../utils/FileInput';
import isEmpty from "lodash/isEmpty";

const imageIsRequired = value => (isEmpty(value) ? "Required" : undefined);

class AddProductForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imageFile: []
    }
  }

  handleOnDrop = newImageFile => this.setState({ imageFile: newImageFile });

  resetForm = () => {
    this.setState({ imageFile: [] });
    this.props.reset();
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <div>
        <Form onSubmit={handleSubmit}>
          <div className="form-group">
          <Field
          name="imageToUpload"
          component={DropZoneField}
          type="file"
          imagefile={this.state.imageFile}
          handleOnDrop={this.handleOnDrop}
          validate={[imageIsRequired]}
        />
          </div>
          <div className='form-group'>
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
          </div>
          <div className='form-group'>
            <Field
              label='Password'
              placeholder='*********'
              name='password'
              type='password'
              component={renderField}
            />
          </div>

          <Button
            disabled={submitting}
            className='btnCommon btnPrimary'
            type='submit'>Submit</Button>
        </Form>
      </div>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Minimum 2 characters';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid Email Address';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Minimum 6 characters';
  }

  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
    {touched && (error && <p className='error'>{error}</p>)}
  </div>
)

AddProductForm = reduxForm({
  form: 'AddProductForm',
  validate
})(AddProductForm);

export default AddProductForm;