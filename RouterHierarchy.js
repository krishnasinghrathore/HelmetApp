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
import { BACKGROUND_COLOR_BLACK_MAT, WHITE_TEXT_COLOR } from './assets/app-color';
import home from './screens/HomeScreen/home';
import forgotPassword from './screens/ForgotPassword/forgoPassword';
import addDevices from './screens/AddTask/addDevices';
import unlockDevice from './screens/UnlockDevice/unlockDevice';

export default RouterComponent = () => {
  return (
    <Router navigationBarStyle={{ backgroundColor: BACKGROUND_COLOR_BLACK_MAT }}
      titleStyle={{ color: WHITE_TEXT_COLOR }}
    >
      <Scene key="root">
        <Scene key="login" component={login} hideNavBar={true} initial></Scene>
        <Scene key="signup" component={signup} title="Sign Up"></Scene>
        <Scene key="forgotPassword" component={forgotPassword} title="Forgot Password"></Scene>
        <Scene key="home" component={home} title="All Devices"></Scene>
        <Scene key="addDevice" component={addDevices} title="Add Device"></Scene>
        <Scene key="unlockDevice" component={unlockDevice} title="Unlock Device"></Scene>
      </Scene>
    </ Router >
  );
};
