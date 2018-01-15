import React from 'react';
import { 
  StyleSheet, Text, View, Platform, TextInput, CheckBox, TouchableOpacity, Button
} from 'react-native';
import {StackNavigator,} from 'react-navigation';
import Login from './src/Login'
import Sign_Up from './src/Sign_Up'

const Navigation = StackNavigator({
  Login:{
    screen:Login,
  },
  Sign_Up:{
    screen:Sign_Up,
  },
})

export default Navigation;
