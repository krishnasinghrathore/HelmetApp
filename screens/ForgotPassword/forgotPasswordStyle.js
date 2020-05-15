import { StyleSheet } from "react-native";
import { TEXT_INPUT_SEPARATOR_COLOR, WHITE_TEXT_COLOR, BACKGROUND_COLOR_BLACK_MAT } from "../../assets/app-color";

export const forgotPasswordStyle = StyleSheet.create({
    inputContainerStyle: {
        height: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    textInputStyle: {
        flex: 1,
        flexDirection: "row",
        fontSize: 18,
        color: WHITE_TEXT_COLOR
    },
    separatorStyle: {
        height: 1,
        backgroundColor: TEXT_INPUT_SEPARATOR_COLOR
    },
    emailLogoStyle: {
        height: "100%",
        width: 20,
        marginRight: 20,
    },
    logo: {
        alignSelf: "center",
        height: 60,
        width: 60,
    },
    container: {
        height: "100%",
        flex: 1,
        backgroundColor: BACKGROUND_COLOR_BLACK_MAT
    },
    scrollContainer: {
        flex: 1,
    },
    imgContainer: {
        flexDirection: "row",
        justifyContent: "center",
        height: 200,
    },
    imageView: {
        flex: 1,
    },
});