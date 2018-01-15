import React,{Component} from 'react';
import { 
  StyleSheet, Text, View, Platform, TextInput, TouchableHighLight, Button
} from 'react-native';
import {StackNavigator,} from 'react-navigation';

export default class Regist extends React.Component {
  constructor(){
    super()
    this.state = {
      name: "",
      password: "",
      password_confirmation: "",
    }
  }

render(){
  return (
    <Text>regist</Text>
  );
}

}

