import React, { Component } from 'react';
import { 
  AppRegistry, TextInput,StyleSheet, Text, View, TouchableHighlight, AlertIOS, TouchableOpacity, AsyncStorage,NavigatorIOS,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class List extends Component {
  constructor(){
    super()
    this.state = {
      list : ''
    }
    try {
      AsyncStorage.getItem('database_form').then((value) => {
        this.setState({
          list: value
        })
      })
    } catch(err){
      console.log(err)
    }
  }

  render(){
    const data = JSON.stringify(this.state.list)
    return (
      <View style={styles.container}>
      <Text>{data}</Text>
      </View>
    );
  }
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
})
