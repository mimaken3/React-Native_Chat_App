import React,{Component} from 'react';
import { 
  StyleSheet, Text, View, Platform, TextInput, CheckBox, TouchableOpacity, Button
} from 'react-native';
import {StackNavigator,} from 'react-navigation';

export default class Chat extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>Test Code</Text>  
      <Text>Nao Minamisawa</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Changes you make will automatically reload.</Text>
      <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


