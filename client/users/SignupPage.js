import React, { Component } from 'react';
import SignupFormContainer from './SignupFormContainer';

class SignupPage extends Component {
    render() {
        return (
      <div>
        <h1>Sign up</h1>
        <div className="well">
            <SignupFormContainer />
        </div>
      </div>
        );
    }
}

export default SignupPage;
