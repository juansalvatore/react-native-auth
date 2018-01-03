import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Button, Header, CardSection, Spinner } from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  state = {
    loggedIn: null,
  }
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC8DBkuBZ7CY_Fh6fSe03eVbVvfbskHag8',
      authDomain: 'auth-5ea88.firebaseapp.com',
      databaseURL: 'https://auth-5ea88.firebaseio.com',
      projectId: 'auth-5ea88',
      storageBucket: 'auth-5ea88.appspot.com',
      messagingSenderId: '194751110876',
    })

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    })
  }

  renderContent = () => {
    const { logOutStyle, spinnerStyle } = styles
    switch (this.state.loggedIn) {
      case true:
        return (
          <View style={logOutStyle}>
            <CardSection>
              <Button
                onPress={() => {
                  firebase.auth().signOut()
                }}
              >
                Log out
              </Button>
            </CardSection>
          </View>
        )
      case false:
        return <LoginForm />
      default:
        return (
          <View style={spinnerStyle}>
            <Spinner size="large" />
          </View>
        )
    }
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        {this.renderContent()}
      </View>
    )
  }
}

const styles = {
  logOutStyle: {
    top: 25,
  },
  spinnerStyle: {
    top: 350,
  },
}
