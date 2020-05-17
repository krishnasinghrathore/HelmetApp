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
import { addDevicesStyle } from "./addDevicesStyle";
import { HMTextInput, HMButton } from '../Component/CommonComponent/commonComponent';
import { Actions } from 'react-native-router-flux';
export default class addDevices extends React.Component {
    render() {
        return (
            <View style={addDevicesStyle.container}>
                <ScrollView
                    style={addDevicesStyle.scrollContainer}>
                    <View style={addDevicesStyle.taskContainer}>
                        <Text style={addDevicesStyle.addTasktextStyle}>Task</Text>
                        <HMTextInput
                            placeholder={"Describe your task"}
                            shouldDisplayLeftImage={false} />
                    </View>
                    <HMButton
                        title={"ADD"}
                        displayImage={false}
                        onPress={() => Actions.pop()} />
                </ScrollView>
            </View>
        );
    }
}