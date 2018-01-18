import React, { Component } from 'react';
import { 
AppRegistry, TextInput,StyleSheet, Text, View, TouchableHighlight, AlertIOS, TouchableOpacity, AsyncStorage, NavigatorIOS,
  } from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      comment: ''
    }
  }

  changeTitle(title){
    this.setState({title})
  }

  changeComment(comment){
    this.setState({comment})
  }

  buttonPressed(){
    const arrayData = [];
    if(!this.state.comment && !this.state.title){
      AlertIOS.alert('タイトルとコメントを入力して下さい')
    } else if(!this.state.title && this.state.comment){
      AlertIOS.alert('タイトルを入力して下さい')
    } else if(this.state.title && !this.state.comment){
      AlertIOS.alert('コメントを入力して下さい')
    } else if(this.state.comment && this.state.title){
      const data = {
        title: this.state.title,
        comment: this.state.comment
      }

      // AlertIOS.alert(data.title) // ok
      // AlertIOS.alert(data.comment) // ok
      // AlertIOS.alert('dataが初期化された') // ok

      arrayData.push(data);
      AsyncStorage.getItem('database_form').then((value) => {
        if(value !== null){
          const d = JSON.parse(value);
      // AlertIOS.alert(JSON.parse(value)) // bad
      // AlertIOS.alert(d) // bad
          d.push(data)

      // AlertIOS.alert('dにdataがpushされた') // ok
      // AlertIOS.alert(d) // bad

          AsyncStorage.setItem('database_form',JSON.stringify(d)).then(() => {
            AlertIOS.alert('今からnullじゃないListに行きまーす！') // ok
            this.props.navigation.navigate("List")
            // this.props.navigator.push({
            //   title: 'List of Things',
            //   component: List,
            // })
          })
        } else {
          AsyncStorage.setItem('database_form',JSON.stringify(arrayData)).then(() =>              {
            this.props.navigator.push({
              component: List,
              title: 'List of Things'
            })
          })
        }
      })
    } 
  }


  render() {
    return (
      <View style={styles.container}>
      <View>

      <TextInput
      style={styles.input}
      placeholder="Title"
      returnKeyType="done"
      value={this.state.title}
      onChangeText={(title) => this.changeTitle(title)}
      />

      <TextInput
      multiline={true}
      style={styles.input, styles.textArea}
      placeholder="Comment"
      returnKeyType="done"
      value={this.state.comment}
      onChangeText={(comment) => this.changeComment(comment)}
      />

      <TouchableHighlight
      style={styles.button}
      onPress={() =>
       this.buttonPressed()
      }>
      <Text style={styles.textButton}>Send</Text>
      </TouchableHighlight>

      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 80,
    paddingLeft: 15,
    paddingRight: 15
  },
  button: {
    backgroundColor: 'skyblue',
    paddingTop: 15,
    paddingBottom: 15
  },
  textButton: {
    textAlign: 'center',
    color: 'white'
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 2,
    marginBottom: 20
  },
  textArea: {
    height: 60
  }
});


