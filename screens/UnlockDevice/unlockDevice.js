/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
    ScrollView,
    View,
    Text,
} from 'react-native';
import { unlockDeviceStyle } from "./unlockDeviceStyle";
import { HMTextInput, HMButton } from '../Component/CommonComponent/commonComponent';
import { Actions } from 'react-native-router-flux';
export default class unlockDevice extends React.Component {
    render() {
        return (
            <View style={unlockDeviceStyle.container}>
                <HMButton
                    title={"UNLOCK DEVICE"}
                    displayImage={false}
                    onPress={() =>
                        Actions.pop()}
                />
            </View>
        );
    }
}