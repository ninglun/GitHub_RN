import React, {Component} from 'react';
import {Button, Text, View, TextInput, StyleSheet} from 'react-native';
import actions from '../action';
import {connect} from 'react-redux';

export default class FetchDemoPage extends Component {
    constructor(props){
        super(props);
        this.state={
            showText: ''
        }
    }
    loadData() {
        let url=`https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(response => response.text())
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
            })
    }
    loadData2() {
        let url=`https://api.github.com/search/repositories?q=${this.searchKey}`;
        fetch(url)
            .then(response => {
                if (response.ok){
                    return response.text();
                }
                throw new Error('Network response was not ok.')
            })
            .then(responseText => {
                this.setState({
                    showText: responseText
                })
            })
            .catch(e =>{
                this.setState({
                    showText: e.toString()
                })
            })
    }
    render() {
        return (

            <View style={{flex: 1}}>
                <Text>Fetch 使用</Text>
                <View style={styles.input_container}>
                    <TextInput
                        style={styles.input}
                        onChangeText={text=>{
                            this.searchKey = text;
                        }}
                    />
                    <Button
                        title='获取'
                        onPress={()=>{
                            this.loadData();
                        }}
                    />
                </View>

                <Text>
                    {this.state.showText}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input:{
        height: 40,
        flex: 1,
        borderColor: 'black',
        borderWidth: 1,
        marginRight: 10
    },
    input_container:{
        flexDirection: 'row',
        alignItems: 'center'
    }
});
