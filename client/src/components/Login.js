import React from 'react';
import GoogleLogin from 'react-google-login'

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onFailure(oauth2Response) {
    console.log(oauth2Response);
  }
  render() {
    return (
      <div>
        {this.props.user.isAuthenticated &&
          <p>Signed in as {this.props.user.firstName} {this.props.user.lastName}</p>
        }
        {!this.props.user.isAuthenticated && !this.props.user.loading &&
          <GoogleLogin
            clientId="186360596290-4cnh2lg5icu20cg6v37g1558r2ds3ve0.apps.googleusercontent.com"
            buttonText={this.props.user.loading ? "Loading..." : "Sign in"}
            onSuccess={this.props.authenticate}
            onFailure={this.onFailure}
          />
        }
      </div>
    );
  }
}
