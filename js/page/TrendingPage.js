import React, { Component } from "react";
import { Text, View, Button } from "react-native";


export default class TrendingPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>TrendingPage</Text>
                <Button
                    title={"改变颜色"}
                    onPress={()=>{
                        navigation.setParams({
                            theme: {
                                tintColor: "red",
                                updateTime: new Date().getTime()
                            }
                        })
                    }}
                />
            </View>
        );
    }
}
