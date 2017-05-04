import React, { Component } from 'react';
import SignupFormContainer from './SignupFormContainer';

class SignupPage extends Component {
  render() {
    return (
      <div className="form-row">
        <h1 className="col-md-8 col-md-offset-2">Sign up</h1>
        <div className="col-md-8 col-md-offset-2 well">
            <SignupFormContainer />
        </div>
      </div>
    );
  }
}

export default SignupPage;
