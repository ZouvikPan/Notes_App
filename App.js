import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)
  
  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyAcZcWNyuehhNMy-GCArM-EM8u2aXwlFEc",
      authDomain: "notesapp-582e1.firebaseapp.com",
      databaseURL: "https://notesapp-582e1.firebaseio.com",
      projectId: "notesapp-582e1",
      storageBucket: "notesapp-582e1.appspot.com",
      messagingSenderId: "578014301589",
      appId: "1:578014301589:web:84bbca68773a8cc6e5ba9c"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent/>
      </View>
    );
  }

  // This was unreachable code hence commented
  // return (
  //   <View style={styles.container}>
  //     {/* <NotesScreenComponent/> */}
  //     <LoginScreenComponent/>
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
