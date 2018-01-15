import React,{Component} from 'react';
import { 
  StyleSheet, Text, View, Platform, TextInput, CheckBox, TouchableOpacity, Button
} from 'react-native';
import {StackNavigator,} from 'react-navigation';

export default class Login extends React.Component {
  static navigationOptions = {
    title: 'ログイン',
  }

  constructor(){
    super()
  }

  render() {
    return (
      <View style={styles.container}>
      <TextInput
      style={styles.inputStyle}
      keyboardType="email-address"
      returnKeyType="done"
      placeholder="Username" />

      <TextInput
      style={styles.inputStyle}
      keyboardType="email-address"
      returnKeyType="done"
      placeholder="Password" />

      <TouchableOpacity>
      <Text style={styles.btnText}>LOGIN</Text>
      </TouchableOpacity>

      <Button style={styles.btnTextSignUp} title="Not a member ? SignUp Now"
      onPress={()=>this.props.navigation.navigate("Sign_Up")}
      />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#26AE90',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 20,
  },
  inputStyle: {
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 100,
    paddingLeft: 100,
    fontSize: 20,
  },
  btnText: {
    backgroundColor: '#ECEEF1',
    paddingBottom: 10,
    paddingTop: 10,
    paddingTop: 10,
    paddingRight: 100,
    paddingLeft: 100,
    fontSize: 18,
    marginTop: 25,
    marginBottom: 70,
    textAlign: 'center',
    color: '#26AE90'
  },
  btnTextSignUp: {
    fontSize: 18,
    color: '#fff',
    marginTop: 70,
    textAlign: 'center'
  }
});

