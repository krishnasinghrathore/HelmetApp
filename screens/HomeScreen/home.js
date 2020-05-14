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
    Image,
    FlatList,
} from 'react-native';
import { IMG_NUMBER1, IMG_ADD } from '../../assets/image/imgConst';
import { homeStyle } from "./homeStyle";
import { TEXT_INPUT_SEPARATOR_COLOR } from '../../assets/app-color';
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            array: [
                {
                    "id": 1,
                    "title": "Breathe",
                    "type": ""
                },
                {
                    "id": 2,
                    "title": "Finish learning android",
                    "type": ""
                },
                {
                    "id": 3,
                    "title": "Listen to new music",
                    "type": ""
                },
                {
                    "id": 4,
                    "title": "Go through email",
                    "type": ""
                },
                {
                    "id": 5,
                    "title": "Grocery shopping",
                    "type": ""
                },
                {
                    "id": 6,
                    "title": "Take a nap",
                    "type": ""
                }],
        };
    }

    renderList(item) {
        return (
            <View style={{ flex: 1, margin: 10, height: 50, justifyContent: "center", }}>
                <View style={{ flex: 1, justifyContent: "space-between", alignItems: "center", flexDirection: 'row' }}>
                    <Text style={{ color: "white", fontSize: 18 }}>{item.title}</Text>
                    <Image style={{ alignSelf: "center" }} source={IMG_NUMBER1} />
                </View>
                <View style={{ height: 1, width: "100%", backgroundColor: TEXT_INPUT_SEPARATOR_COLOR }}></View>
            </View>
        );
    }

    render() {
        return (
            <View style={homeStyle.container}>
                <FlatList
                    data={this.state.array}
                    renderItem={({ item }) => this.renderList(item)}
                    keyExtractor={item => item.id}
                />
                <TouchableOpacity style={{ alignSelf: "flex-end", marginBottom: 20, marginRight: 20 }}>
                    <Image source={IMG_ADD} />
                </TouchableOpacity>
            </View>
        );
    }
}