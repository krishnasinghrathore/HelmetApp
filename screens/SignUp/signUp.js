/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { signUpStyle } from "./signUpStyle";


export default class signup extends React.Component {
  render() {
    return (
      <View style={loginStyle.container}>
        <Text>hello sign up</Text>
      </View>
    );
  }
}