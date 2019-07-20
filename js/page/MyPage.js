import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';

class MyPage extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text>FavoritePage</Text>
                <Button
                    title={'改变颜色'}
                    onPress={()=>{
                        this.props.onThemeChange('#f00')
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

export default connect(mapStateToProps, mapDispatchToProps)(MyPage)
