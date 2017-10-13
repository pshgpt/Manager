import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import reducers from './src/reducers';
import Router from './src/Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCBGH2ZbSzKikSS7hVWCYnK2r4Mh60AsK8',
      authDomain: 'manager-dcb4b.firebaseapp.com',
      databaseURL: 'https://manager-dcb4b.firebaseio.com',
      projectId: 'manager-dcb4b',
      storageBucket: 'manager-dcb4b.appspot.com',
      messagingSenderId: '282154119232'
  };
  firebase.initializeApp(config);
  console.ignoredYellowBox = ['Setting a timer'];
  }
  render() {
   return (
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>

         <Router />

    </Provider>
    );
  }
}

export default App;
