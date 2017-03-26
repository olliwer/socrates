import React from 'react';
import GoogleLogin from 'react-google-login'

const responseGoogle = (response) => {
  console.log(response);
}

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
      <GoogleLogin
        clientId="186360596290-4cnh2lg5icu20cg6v37g1558r2ds3ve0.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
      </div>
    );
  }
}
