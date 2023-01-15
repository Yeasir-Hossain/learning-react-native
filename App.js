import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, RefreshControl } from 'react-native';

export default function App() {
  const [name, setName] = useState('Yeasir')
  const onclickhandler = () => {
    setName('Yeasir Hossain')
  }
  const [items, setItems] = useState([
    { key: 1, item: 'item 1' },
    { key: 2, item: 'item 2' },
    { key: 3, item: 'item 3' },
    { key: 4, item: 'item 4' },
    { key: 5, item: 'item 5' },
    { key: 6, item: 'item 6' },
    { key: 7, item: 'item 7' },
    { key: 8, item: 'item 8' },
  ])
  const [Refreshing, setRefreshing] = useState(false)

  const onRefresh = () => {
    setRefreshing(true)
    setItems([...items, { key: 69, item: 'item69' }])
    setRefreshing(false)
  }

  return (
    <View style={styles.body}>
      {/* <View style={styles.view1}>
        <Text style={styles.text}>1</Text>
      </View>
      <View style={styles.view2}>
        <Text style={styles.text}>2</Text>
      </View>
      <View style={styles.view3}>
        <Text style={styles.text}>3</Text>
      </View> */}
      <ScrollView
        refreshControl={<RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />}
      >
        {
          items.map((i) => {
            return (
              <View key={i.key} style={styles.list}>
                <Text style={styles.text}>{i.item}</Text>
              </View>
            )
          })
        }
      </ScrollView>

    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',

  },
  view1: {
    width: 100,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view2: {
    width: 100,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view3: {
    width: 100,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
    fontSize: 20,
    textTransform: 'uppercase'
  },
  list: {
    margin: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan'
  }
});
