import firebase from 'firebase'
import React, { Component } from 'react'
import { Text } from 'react-native'
import { Button, Card, CardSection, Input, Spinner } from './common'

class LoginForm extends Component {
  state = {
    email: '',
    password: '',
    error: '',
    loading: false,
  }
  onButtonPress = () => {
    const { email, password } = this.state
    this.setState({ error: '', loading: true })

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(error => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this))
      })
  }

  onLoginFail = error => {
    this.setState({
      error: error.message,
      loading: false,
    })
  }

  onLoginSuccess = () => {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    })
  }
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="user@mail.com"
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry={true}
            placeholder="password"
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>
          {this.state.loading ? (
            <Spinner size="small" />
          ) : (
            <Button onPress={this.onButtonPress.bind(this)}>Log in</Button>
          )}
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
}

export default LoginForm
