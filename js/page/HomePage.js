import React, {Component} from 'react';
import {
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';
import {Text, View, StyleSheet} from 'react-native';
import PopularPage from './PopularPage';
import TrendingPage from './TrendingPage';
import FavoritePage from './FavoritePage';
import MyPage from './MyPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import NavigationUtil from '../navigator/NavigationUtil';
import DynamicTabNavigator from '../navigator/DynamicTabNavigator';

export default class HomePage extends Component {

    render() {
        NavigationUtil.navigation = this.props.navigation;
        console.log('navigation1111: ' + JSON.stringify(this.props.navigation));
        return <DynamicTabNavigator/>;
    }
}
