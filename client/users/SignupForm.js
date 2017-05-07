import React from 'react';
import { Field, reduxForm } from 'redux-form';

// @see https://codesandbox.io/s/mZRjw05yp
// @see https://redux-form.com/6.6.3/docs/GettingStarted.md/

const validateAndSignUpUser = (values, dispatch) => {
    alert('OK');
}

// @todo: move this function in a dedicated module, to be shared by all form components
const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
  <div className="form-group">
    <label className="col-sm-5 control-label">{label}</label>
    <div className="col-sm-7">
      <input {...input} placeholder={label} type={type}/>
      {touched && (
        (
          error && <span className="text-danger"><span className="glyphicon glyphicon-warning-sign">&nbsp;</span>{error}</span>)
          ||
          (warning && <span className="text-warning"><span className="glyphicon glyphicon-warning-sign">&nbsp;</span>{warning}</span>
        )
      )}
    </div>
  </div>
);

const validate = values => {
  const errors = {}

  if (!values.username || values.username === '') {
    errors.username = 'Required';
  }

  if (!values.email || values.email === '') {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Wrong format';
  }

  if (!values.password || values.password === '') {
    errors.password = 'Required';
  } else if (values.password.length < 8) {
    errors.password = '8 characters minimum';
  }

  if (values.password !== values.password_again) {
    errors.password_again = 'Passwords must match';
  }

  return errors;
}

// @todo: add an avatar field (image upload)
const SignupForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className="form-horizontal">
      <Field name="username" type="text" component={renderField} label="Username"/>
      <Field name="email" type="text" component={renderField} label="Email"/>
      <Field name="password" type="password" component={renderField} label="Password"/>
      <Field name="password_again" type="password" component={renderField} label="Confirm password"/>
      <div className="form-group">
        <div className="col-sm-7 col-sm-offset-5">
          <button type="submit" disabled={submitting} className="btn btn-primary">Submit</button>
          <button type="button" disabled={pristine || submitting} onClick={reset} className="btn">Clear Values</button>
        </div>
      </div>
    </form>
  )
};

// @todo: inject onSubmit through props (from parent to keep this component 'dumb')
export default reduxForm({
  form: 'SignupForm', // a unique identifier for this form
  validate,
  onSubmit: () => alert('coucou'),
})(SignupForm);

// @todo: prop type checking
// @see https://facebook.github.io/react/docs/typechecking-with-proptypes.html (!!deprecated!!)
// @see https://github.com/reactjs/prop-types
