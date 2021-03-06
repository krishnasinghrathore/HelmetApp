/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity,
} from 'react-native';
import { IMG_LOGO, IMG_FB, IMG_ARROW, IMG_AT_SYMBOL, IMG_LOCK, IMG_EYE_SHOW } from '../../assets/image/imgConst';
import { loginStyle } from "./loginStyle";
import { Actions } from 'react-native-router-flux';
import { HMTextInput, HMButton } from '../Component/CommonComponent/commonComponent';


export default class login extends React.Component {
    render() {
        return (
            <View style={loginStyle.container}>
                <ScrollView
                    style={loginStyle.scrollContainer}>
                    <View style={loginStyle.imgContainer}>
                        <Image style={loginStyle.logo} source={IMG_LOGO} />
                    </View>

                    <HMTextInput
                        shouldDisplayLeftImage={true}
                        placeholder={"Email"}
                        imageHolder={IMG_AT_SYMBOL} />

                    <View style={loginStyle.passwordTextContainer}>
                        <HMTextInput
                            shouldDisplayLeftImage={true}
                            secureText={true}
                            placeholder={"Password"}
                            imageHolder={IMG_LOCK} />
                    </View>

                    <View style={loginStyle.forgetPasswordContainer}>
                        <TouchableOpacity style={loginStyle.forgetPasswordButtonStyle}
                            onPress={() => Actions.forgotPassword()}
                        >
                            <Text style={loginStyle.forgetPasswordTextStyle}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <HMButton
                        title={"SIGN IN"}
                        displayImage={true}
                        onPress={() =>
                            Actions.home()}
                    />

                    <View style={loginStyle.dontHaveAccountContainerStyle}>
                        <Text style={loginStyle.forgetPasswordTextStyle}>Don't have an account? </Text>
                        <TouchableOpacity style={loginStyle.forgetPasswordButtonStyle}
                            onPress={() => Actions.signup()}
                        >
                            <Text style={loginStyle.signupTextStyle}>Sign up</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </View>
        );
    }
}