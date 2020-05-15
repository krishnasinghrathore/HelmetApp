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
import { addTaskStyle } from "./addTaskStyle";
import { HMTextInput, HMRadioButton, HMButton } from '../Component/CommonComponent/commonComponent';
import { IMG_RADIO_BUTTON_UNSELECTED, IMG_RADIO_BUTTON_SELECTED } from "../../assets/image/imgConst"
import { Actions } from 'react-native-router-flux';
export default class addTask extends React.Component {
    render() {
        return (
            <View style={addTaskStyle.container}>
                <ScrollView
                    style={addTaskStyle.scrollContainer}>
                    <View style={addTaskStyle.taskContainer}>
                        <Text style={addTaskStyle.addTasktextStyle}>Task</Text>
                        <HMTextInput
                            placeholder={"Describe your task"}
                            shouldDisplayLeftImage={false} />
                        <Text style={addTaskStyle.priorityTextStyle}>Priority</Text>
                        <View style={addTaskStyle.radioButtonsContainer}>
                            <HMRadioButton
                                title="High"
                                customContainerStyle={addTaskStyle.radioComponentColorStyle1}
                                imageName={IMG_RADIO_BUTTON_SELECTED} />
                            <HMRadioButton
                                title="Medium"
                                customContainerStyle={addTaskStyle.radioComponentColorStyle2}
                                imageName={IMG_RADIO_BUTTON_UNSELECTED} />
                            <HMRadioButton
                                title="Low"
                                customContainerStyle={addTaskStyle.radioComponentColorStyle3}
                                imageName={IMG_RADIO_BUTTON_UNSELECTED} />
                        </View>
                    </View>
                    <HMButton
                        title={"ADD"}
                        displayImage={false}
                        onPress={() => Actions.home()} />
                </ScrollView>
            </View>
        );
    }
}