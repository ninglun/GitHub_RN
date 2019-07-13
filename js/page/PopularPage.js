import React, { Component } from "react";
import { Text, View } from "react-native";
import {
    createMaterialTopTabNavigator,
    createAppContainer
} from "react-navigation";
import NavigationUtil from "../navigator/NavigationUtil";
export default class PopularPage extends Component {
    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator({
            PopularTab1:{
                screen:PopularTab,
                navigationOptions:{
                    title: "Tab1"
                }
            },
            PopularTab2:{
                screen:PopularTab,
                navigationOptions:{
                    title: "Tab2"
                }
            },
        }));
        return <TabNavigator/>
    }
}

class PopularTab extends Component {
    render() {
        const {tabLabel} = this.props;
        return (

            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation
                    },"DetailPage")
                }}>跳转到详情页</Text>
            </View>
        );
    }
}
