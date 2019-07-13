import React, { Component } from "react";
import { Text, View } from "react-native";
import NavagationUtil from "../navigator/NavigationUtil";
export default class WelcomePage extends Component {
    componentDidMount() {
        this.timer=setTimeout(() => {
            NavagationUtil.resetToHomPage({
                navigation: this.props.navigation
            });
        }, 2000)
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>WelcomePage</Text>
            </View>
        );
    }
}
