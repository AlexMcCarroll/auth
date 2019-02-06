import React from 'react';
import { View } from 'react-native';
import firebase from 'firebase'; 
import { Header } from './src/components/common';

export default class App extends React.Component {

  // lifecycle methods are automatically invoked
  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyCC_Qv5jT4MX3IBfd00XI0LC_MyUqkuC2Y",
        authDomain: "auth-bea04.firebaseapp.com",
        databaseURL: "https://auth-bea04.firebaseio.com",
        projectId: "auth-bea04",
        storageBucket: "auth-bea04.appspot.com",
        messagingSenderId: "811431017134"
      }
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header headerText={'Sign In'}/>
      </View>
    );
  }
}
