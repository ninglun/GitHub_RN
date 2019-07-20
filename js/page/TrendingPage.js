import React, { Component } from "react";
import { Text, View, Button } from "react-native";
import {connect} from 'react-redux';
import actions from '../action/index';

class TrendingPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>TrendingPage</Text>
                <Button
                    title={"改变颜色"}
                    onPress={()=>{
                        this.props.onThemeChange('#096')
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = state =>({

});

const mapDispatchToProps = dispatch =>({
   onThemeChange: theme=>dispatch(actions.onThemeChange(theme))
});

export default connect(mapStateToProps, mapDispatchToProps)(TrendingPage)
