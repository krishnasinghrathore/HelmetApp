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
import { LOGIN_BACKGROUND, WHITE_TEXT_COLOR } from './assets/app-color';
import home from './screens/HomeScreen/home';

export default App = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: LOGIN_BACKGROUND }}
      titleStyle={{ color: WHITE_TEXT_COLOR }}
    >
      <Scene key="root">
        <Scene key="login" component={login} hideNavBar={true} initial></Scene>
        <Scene key="signup" component={signup} title="Sign Up"></Scene>
        <Scene key="home" component={home} title="All Tasks"></Scene>
      </Scene>
    </ Router >
  );
};
