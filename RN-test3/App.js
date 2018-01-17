import React, { Component } from 'react';
import { 
 AppRegistry, TextInput,StyleSheet, Text, View, TouchableHighlight, AlertIOS, TouchableOpacity, NavigatorIOS
} from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

import Home from './Home';
import List from './List';

// const Navigation = StackNavigator({
//       Home:{
//         screen:Home,
//       },
//       List:{
//         screen:List,
//   },
export default class App extends Component {
  render() {
    return (
      <NavigatorIOS
      initialRoute={{
        component: Home,
          title: 'Reacttttt'
      }}
      style={{flex: 1}}
      />
    );
  }
}

// export default Navigation;
