import React from 'react';
import {
  Form,
  Button
} from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
//import CustomValidations from  '../../utils/validations';

class AddProductForm extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const { handleSubmit, submitting } = this.props;
    return (
      <div>
        <Form onSubmit={handleSubmit}>

          <div className='form-group'>
            <Field
              label='Product Name'
              placeholder='*********'
              name='productName'
              type='text'
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field
              label='Product Price'
              placeholder='Enter Product Price'
              name='productPrice'
              type="number"
              component={renderField}
            />
          </div>
          <div className='form-group'>
            <Field
              label='Product Discount'
              placeholder='Enter Product Discount in %'
              name='discount'
              type='text'
              component={renderField}
            />
          </div>

           <div className='form-group'>
            <Field
              label='Product SKU'
              placeholder='Enter Product Discount in %'
              name='sku'
              type='text'
              component={renderField}
            />
          </div>

           <div className='form-group'>
            <Field
              label='Quantity'
              placeholder='Enter Product Discount in %'
              name='quantity'
              type='text'
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

  if (!values.productName) {
    errors.productName = 'Required';
  } else if (values.productName.length < 2) {
    errors.productName = 'Minimum 2 characters';
  }

  if (!values.productPrice) {
    errors.productPrice = 'Required';
  } else if(isNaN(Number(values.productPrice))) {
    errors.productPrice = 'Invalid valid number';
  }

  if (!values.discount) {
    errors.discount = 'Required';
  } else if (isNaN(Number(values.discount))) {
    errors.discount = 'Invalid valid number';
  }

  if (!values.discount) {
    errors.discount = 'Required';
  } else if (isNaN(Number(values.discount))) {
    errors.discount = 'Invalid valid number';
  }

  if (!values.sku) {
    errors.sku = 'Required';
  } else if (isNaN(Number(values.sku))) {
    errors.sku = 'Invalid valid number';
  }

  if (!values.quantity) {
    errors.quantity = 'Required';
  } else if (isNaN(Number(values.quantity))) {
    errors.quantity = 'Invalid valid number';
  }

  return errors;
}

const renderField = ({ input, label, type, meta: { touched, error,warning } }) => (
  <div>
    <label>{label}</label>
    <input {...input} type={type} />
    {touched && ((error && <p className='error'>{error}</p>) || (warning && <p className='warning'>{warning}</p>))}
  </div>
)

AddProductForm = reduxForm({
  form: 'AddProductForm',
  validate
})(AddProductForm);

export default AddProductForm;