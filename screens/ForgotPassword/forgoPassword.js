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
import { forgotPasswordStyle } from "./forgotPasswordStyle";
import { Actions } from 'react-native-router-flux';
import { HMTextInput, HMButton } from '../Component/CommonComponent/commonComponent';


export default class forgotPassword extends React.Component {
    render() {
        return (
            <View style={forgotPasswordStyle.container}>
                <ScrollView
                    style={forgotPasswordStyle.scrollContainer}>
                    <View style={forgotPasswordStyle.imgContainer}>
                        <Image style={forgotPasswordStyle.logo} source={IMG_LOGO} />
                    </View>

                    <HMTextInput
                        placeholder={"Email"}
                        imageHolder={IMG_AT_SYMBOL} />

                    <View style={forgotPasswordStyle.forgetPasswordContainer}>
                        <TouchableOpacity style={forgotPasswordStyle.forgetPasswordButtonStyle}>
                            <Text style={forgotPasswordStyle.forgetPasswordTextStyle}>Forgot Password?</Text>
                        </TouchableOpacity>
                    </View>

                    <HMButton
                        title={"SEND EMAIL"}
                        displayImage={true}
                        onPress={() =>
                            Actions.login()}
                    />
                </ScrollView>
            </View>
        );
    }
}