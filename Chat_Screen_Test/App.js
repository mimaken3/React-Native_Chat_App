import React from 'react';
import { 
  StyleSheet, Text, View, Platform, TextInput, CheckBox, TouchableOpacity, Button, AppRegistry,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Home from './Home'
import Chat from './Chat'

const App = StackNavigator({
  Home: {
    screen: Home
  },
  Chat: {
    screen: Chat
  },
});

export default App

