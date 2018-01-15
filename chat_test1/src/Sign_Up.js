import React,{Component} from 'react';
import { 
  StyleSheet, Text, View, Platform, TextInput, CheckBox, TouchableOpacity, Button, AsyncStorage, TouchableHighlight, AppRegistry
} from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class Sign_Up extends React.Component {
  static navigationOptions = {
    title: 'サインアップ',
  }

  constructor(){
    super()
    this.state = {
      username: '',
      password: '',
      password_confirmation: '',
    }
  }

Regist_Data(){
  let username = this.state
  let password = this.state
  AsyncStorage.setItem('username',username)
  AsyncStorage.setItem('password',password)
  this.setState({username: username, Persisted_Name: username, password: password, Persisted_Passwd})
}

Check_Data(){
  AsyncStorage.getItem('Username').then((username) => {
    this.setState({username: username, Persisted_Name: username})
  })

  AsyncStorage.getItem('password').then((password) => {
    this.setState({password: password, Persisted_Passwd: password})
  })

}

Chear_Data(){
  AsyncStorage.clear()
  this.setState({Persisted_Name: '', Persisted_Passwd: ''})
}

  render() {
    return (

      <View style={styles.container}>

      <TextInput
      value={this.state.username}
      onChangeText = {(text) => this.setState({username: text})}
      style={styles.input} placeholder="Username"
      />


      <TextInput
      value={this.state.password}
      onChangeText = {(text) => this.setState({password: text})}
      style={styles.input} placeholder="Password"
      secureTextEntry={true}
      />

      <TextInput
      value={this.state.password_confirmation}
      onChangeText = {(text) => this.setState({password_confirmation: text})}
      style={styles.confirm_input} placeholder="Confirm Password"
      secureTextEntry={true}
      />

      <TouchableOpacity
      onPress={this.Regist_Data}>
      <Text style={styles.regist_input}>Regist</Text>
      </TouchableOpacity>

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
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 15,
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 100,
    paddingLeft: 100,
    fontSize: 20,
  },
  confirm_input: {
    fontSize: 20,
    backgroundColor: '#fff',
    paddingBottom: 10,
    paddingTop: 10,
    paddingRight: 65,
    paddingLeft: 65,

  },
 regist_input: {
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

});



