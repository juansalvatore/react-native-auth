import firebase from 'firebase'
import React, { Component } from 'react'
import { View } from 'react-native'
import { Header } from './components/common'
import LoginForm from './components/LoginForm'

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyC8DBkuBZ7CY_Fh6fSe03eVbVvfbskHag8',
      authDomain: 'auth-5ea88.firebaseapp.com',
      databaseURL: 'https://auth-5ea88.firebaseio.com',
      projectId: 'auth-5ea88',
      storageBucket: 'auth-5ea88.appspot.com',
      messagingSenderId: '194751110876',
    })
  }

  render() {
    return (
      <View>
        <Header headerText="Auth" />
        <LoginForm />
      </View>
    )
  }
}
