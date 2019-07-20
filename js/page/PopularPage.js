import React, {Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import {
    createMaterialTopTabNavigator,
    createAppContainer,
} from 'react-navigation';
import NavigationUtil from '../navigator/NavigationUtil';

export default class PopularPage extends Component {
    constructor(props) {
        super(props);
        this.tabNames = ['Java', 'Android', 'IOS', 'React Native', 'PHP'];

    }
    _genTabs(){
        const tabs={};
        this.tabNames.forEach((item, index)=>{
            tabs[`tab${index}`] = {
                screen: props => <PopularTab {...props} tabLabel={item}/>,
                navigationOptions: {
                    title: item
                }
            }
        });
        return tabs;
    }
    render() {
        const TabNavigator = createAppContainer(createMaterialTopTabNavigator(
            this._genTabs(), {
                tabBarOptions: {
                    tabStyle:styles.tabStyle,
                    upperCaseLabel: false,
                    scrollEnabled: true,
                    style: {
                        backgroundColor: '#678'
                    },
                    indicatorStyle: styles.indicatorStyle,
                    labelStyle: styles.labelStyle
                }
            }
        ));
        return <TabNavigator/>;
    }
}

class PopularTab extends Component {
    render() {
        const {tabLabel} = this.props;
        console.log('navigation pop: ' + JSON.stringify(this.props.navigation));
        return (

            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>{tabLabel}</Text>
                <Text onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation,
                    }, 'DetailPage');
                }}>跳转到详情页</Text>
                <Button
                    title={"Fetch 使用"}
                    onPress={() => {
                    NavigationUtil.goPage({
                        navigation: this.props.navigation,
                    }, 'FetchDemoPage');
                }}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   tabStyle:{
       minWidth: 50
   },
   indicatorStyle:{
       height: 2,
       backgroundColor: 'white'
   },
   labelStyle:{
       fontSize:13,
       marginTop:6,
       marginBottom:6
    }
});
