/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    TouchableOpacity,
    View,
    Image,
    TextInput,
} from 'react-native';
import { HMTextInputStyle } from "./commonComponentStyle";
import { IMG_USER, IMG_EYE_SHOW } from '../../../assets/image/imgConst';

export const HMTextInput = (props) => {
    return (
        <View style={HMTextInputStyle.inputContainerStyle}>
            <View style={HMTextInputStyle.textInputStyle}>
                <Image style={HMTextInputStyle.emailLogoStyle}
                    resizeMode="contain"
                    source={props.imageHolder || IMG_USER} />
                <TextInput
                    secureText={props.secureText || false}
                    style={HMTextInputStyle.textInputStyle}
                    placeholderTextColor="#757575"
                    placeholder={props.placeholder || ""} />

                {props.secureText && <TouchableOpacity>
                    <Image style={HMTextInputStyle.emailLogoStyle} resizeMode="contain" source={IMG_EYE_SHOW} />
                </TouchableOpacity>}
            </View>
            <View style={HMTextInputStyle.separatorStyle} />
        </View>
    );
}