import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";

import { Card, CardSection, Input, Button } from "./common";
import { emailChanged, passwordChanged } from "../actions";

class LoginForm extends Component {
  onEmailChange = email => {
    this.props.emailChanged(email);
  };

  onPasswordChange = password => {
    this.props.passwordChanged(password);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@mail.com"
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>Login</Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password } = auth;

  return {
    email,
    password
  };
};

export default connect(mapStateToProps, {
  emailChanged,
  passwordChanged
})(LoginForm);
