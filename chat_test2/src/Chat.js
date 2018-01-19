import React from 'react';
import {
  StyleSheet,Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, StatusBar, FlatList, Image,
} from 'react-native';

import ReversedFlatList from 'react-native-reversed-flat-list';

import {send, subscribe} from 'react-native-training-chat-server';
import Header from './Header';

const Name = '@Test_Name';
const Channel = 'Test_Room'
const Avatar =
  'https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg';
export default class Chat extends React.Component {
  state = {
    typing: '',
    messages: [],
  };

  componentWillMount() {
    subscribe(Channel, messages => {
      this.setState({messages});
    });
  }

  sendMessage = async () => {
    // read message from component state
    const message = this.state.typing;

    // send message to our channel, with sender name
    await send({
      channel: Channel,
      sender: Name,
      avatar: Avatar,
      message,
    });

    // set the component state (clears text input)
    this.setState({
      typing: '',
    });
  };

  renderItem({item}) {
    return (
      <View style={styles.row}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <View style={styles.rowText}>
          <Text style={styles.sender}>{item.sender}</Text>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
      <Header title={Channel} />
      <ReversedFlatList
      data={this.state.messages}
      renderItem={this.renderItem}
      />
      <KeyboardAvoidingView behavior="padding">
      <View style={styles.footer}>
      <TextInput
      returnKeyType="done"
      value={this.state.typing}
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder="メッセージを入力して下さい"
      onChangeText={text => this.setState({typing: text})}
      />
      <TouchableOpacity onPress={this.sendMessage}>
      <Text style={styles.send}>Send</Text>
      </TouchableOpacity>
      </View>

      </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  avatar: {
    borderRadius: 20,
    width: 40,
    height: 40,
    marginRight: 10,
  },
  rowText: {
    flex: 1,
  },
  message: {
    fontSize: 18,
  },
  sender: {
    fontWeight: 'bold',
    paddingRight: 10,
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#eee',
  },
  input: {
    paddingHorizontal: 20,
    fontSize: 18,
    flex: 1,
  },
  send: {
    alignSelf: 'center',
    color: 'lightseagreen',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 20,
  },
});

