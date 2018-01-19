import React from 'react';
import { StyleSheet, FlatList, TouchableOpacity, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

/* サンプルデータ */
const mathematics = [
  { key: 'geo', title: 'Geometry', detail: 'aaa' },
  { key: 'ana', title: 'Analysis', detail: 'bbb' },
  { key: 'alg', title: 'Algebra', detail: 'ccc' },
];

/* スタイル */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 24,
    color: 'rgba(14, 13, 13, .38)',
  },
  paragraph: {
    fontSize: 18,
    color: '#737373',
  },
  listItem: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(14, 13, 13, .38)',
    marginVertical: 12,
  },
});

/*
 * データのタイトルをリスト表示するコンポーネント
 * ナビゲーターで描画すると引数(props)に`navigation`が渡される
 */
const ListScreen = ({ navigation }) => (
  <FlatList
  data={mathematics}
  renderItem={({ item }) => (
    <TouchableOpacity
    key={item.key}
    style={styles.listItem}
    /* タイトルが押されたら詳細画面にナビゲート、`item`を引数として渡している */
    onPress={() => navigation.navigate('Detail', item)}
    >
    <Text style={styles.heading}>{item.title}</Text>
    </TouchableOpacity>
  )}
  contentContainerStyle={styles.container}
  />
);
/* ナビゲーションの見た目や挙動に関する設定 */
ListScreen.navigationOptions = () => ({
  /* 画面ヘッダーに表示するタイトルを'Mathematics'にする */
  title: 'Mathematics',
});

// データの詳細を表示するコンポーネント
const DetailScreen = ({ navigation }) => (
  <View style={styles.container}>
  {/* `navigation.state.params`からリストで渡した`item`の中身が取れる */}
  <Text style={[styles.heading, { marginBottom: 24 }]}>{navigation.state.params.title}</Text>
  <Text style={styles.paragraph}>{navigation.state.params.detail}</Text>
  </View>
);
DetailScreen.navigationOptions = {
  title: 'Detail',
};

/*
 * StackNavigatorを作成
 * 第一引数は登録する画面(Screen)情報を設定
 * 第二引数はオプション、初期表示画面を設定
 */
export default StackNavigator({
  Detail: { screen: DetailScreen },
  List: { screen: ListScreen },
}, {
  initialRouteName: 'List',
});
