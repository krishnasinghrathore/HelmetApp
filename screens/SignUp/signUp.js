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
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { signUpStyle } from "./signUpStyle";
import { IMG_LOGO, IMG_AT_SYMBOL, IMG_LOCK, IMG_EYE_SHOW, IMG_ARROW, IMG_USER } from '../../assets/image/imgConst';
import { Actions } from 'react-native-router-flux';
import { HMTextInput } from "../Component/CommonComponent/commonComponent";

export default class signup extends React.Component {
  render() {
    return (
      <View style={signUpStyle.container}>
        <ScrollView
          style={signUpStyle.scrollContainer}>
          <View style={signUpStyle.imgContainer}>
            <Image style={signUpStyle.logo} source={IMG_LOGO} />
          </View>

          <HMTextInput
            placeholder={"First Name"}
            imageHolder={IMG_USER} />

          <View style={signUpStyle.textInputContainer}>
            <HMTextInput
              placeholder={"Last Name"}
              imageHolder={IMG_USER} />
          </View>

          <View style={signUpStyle.textInputContainer}>
            <HMTextInput
              placeholder={"Email"}
              imageHolder={IMG_AT_SYMBOL} />
          </View>

          <View style={signUpStyle.textInputContainer}>
            <HMTextInput
              secureText={true}
              placeholder={"Password"}
              imageHolder={IMG_LOCK} />
          </View>

          <View style={signUpStyle.signUpContainerStyle}>
            <TouchableOpacity style={signUpStyle.signUpButtonTextContainer}>
              <Text style={signUpStyle.signUpButtonText}>SIGN UP</Text>
              <Image source={IMG_ARROW} style={signUpStyle.arrowImageStyle} />
            </TouchableOpacity>
          </View>

          <View style={signUpStyle.dontHaveAccountContainerStyle}>
            <Text style={signUpStyle.forgetPasswordTextStyle}>Already a member ? </Text>
            <TouchableOpacity style={signUpStyle.forgetPasswordButtonStyle}
              onPress={() => Actions.pop()}
            >
              <Text style={signUpStyle.signupTextStyle}>Log in</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    );
  }
}