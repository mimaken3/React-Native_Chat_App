import React from 'react';
import { 
  StyleSheet, Text, View, Platform, TextInput, CheckBox, TouchableOpacity, Button, AsyncStorage, FlatList,
} from 'react-native';

export default class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [{
        key: 1,
        username: 'Peter',
        text: 'Helloooooo',
      },{
        key: 2,
        username: 'Jonas',
        text: 'Woooold'
      }]
    };
  }

  send = () => {

  }

  renderItem (row) = {
  const { params } = this.props.navigation.state;
  const me = row.item.username == params.username;
    return (
      <View style = {[styles.chatRow, me && styles.chatRowMe]}>
      <Text>
      <Text>{row.item.username}:</Text> {row.item.text}
      </Text>
      </View>
    );
  }

  render(){
    return(
      <View style={styles.container}>
      <FlatList
      sytle={{flex: 1}}
      data={this.state.data}
      renderItem={this.renderItem}
      />

      <View style={{height: 80, flexDirection: 'row'}}>
      <TextInput
      style={{flex: 1, height: 60, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(input) => this.setState({input})}
      value={this.state.input}
      />

      <Button
      style={{width: 80}}
      onPress={this.send}
      title="Send"
      />
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  chatRow: {
    width: 3000,
    backgroundColor: '#ceceff',
    padding: 15,
    borderRadius: 15,
    marginTop: 5
  },
  chatRowMe: {
    alignSelf: 'flex-end',
    backgroundColor: '#ceffce'
  }

});









