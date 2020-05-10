/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import login from './screens/Login/login';
import signup from './screens/SignUp/signUp';

export default App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={login} hideNavBar={true} initial></Scene>
        <Scene key="signup" component={signup} title="signup"></Scene>
      </Scene>
    </Router >
  );
};
