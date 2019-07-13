import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class FavoritePage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>FavoritePage</Text>
                <Button
                    title={'改变颜色'}
                    onPress={() => {
                        navigation.setParams({
                            theme: {
                                tintColor: 'blue',
                                updateTime: new Date().getTime(),
                            },
                        });
                    }}
                />
            </View>
        );
    }
}
