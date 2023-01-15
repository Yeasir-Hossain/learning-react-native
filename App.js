import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, RefreshControl, FlatList, SectionList, TextInput } from 'react-native';

export default function App() {
  // const [name, setName] = useState('Yeasir')
  // const onclickhandler = () => {
  //   setName('Yeasir Hossain')
  // }

  // const [data, setData] = useState([
  //   {
  //     title: "Title 1",
  //     data: [
  //       'Item 1-1', 'Item 1-2', 'Item 1-3'
  //     ]
  //   },
  //   {
  //     title: "Title 2",
  //     data: [
  //       'Item 2-1', 'Item 2-2', 'Item 2-3'
  //     ]
  //   },
  //   {
  //     title: "Title 3",
  //     data: [
  //       'Item 3-1', 'Item 3-2', 'Item 3-3'
  //     ]
  //   },
  //   {
  //     title: "Title 4",
  //     data: [
  //       'Item 4-1', 'Item 4-2', 'Item 4-3'
  //     ]
  //   },
  // ])


  // const [items, setItems] = useState([
  //   { item: 'item 1' },
  //   { item: 'item 2' },
  //   { item: 'item 3' },
  //   { item: 'item 4' },
  //   { item: 'item 5' },
  //   { item: 'item 6' },
  //   { item: 'item 7' },
  //   { item: 'item 8' },
  // ])
  // const [Refreshing, setRefreshing] = useState(false)

  // const onRefresh = () => {
  //   setRefreshing(true)
  //   setItems([...items, { item: 'item69' }])
  //   setData([...data, {
  //     title: "Title New",
  //     data: [
  //       'Item New-1', 'Item New-2', 'Item New-3'
  //     ]
  //   }])

  //   setRefreshing(false)
  // }
  const [name, setName] = useState('')
  // const disp = name.length === 0 ? 'flex' : 'none'

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
      {/* <ScrollView
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
      </ScrollView> */}
      {/* <FlatList
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        refreshControl={<RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />}
       
        data={items}
        renderItem={({ item }) => (
          <View style={styles.list}>
            <Text style={styles.text}>{item.item}</Text>
          </View>
        )}
      /> */}
      {/* <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={data}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.text}>{item}</Text>
          </View>
        )}
        refreshControl={<RefreshControl
          refreshing={Refreshing}
          onRefresh={onRefresh}
          colors={['red']}
        />}
        renderSectionHeader={({ section }) => (
          <View style={styles.list}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
        )}
      /> */}
      {/* input  */}
      <Text style={styles.text}>Please write your name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder='e.g John'
        onChangeText={(value) => { setName(value) }
        }
        maxLength={6}
      />
       <TextInput
        style={styles.input}
        placeholder='password'
        secureTextEntry
        maxLength={6}
      />
      <Text>Hello, {name}!</Text>

    </View>

  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    marginTop: StatusBar.currenHeight || 20

  },
  input: {
    borderBottomWidth: 1,
    width: 200,
    borderColor: 'grey',
    borderRadius: 5,
    padding: 10
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
  },
  list: {
    flex: 1,
    margin: 10,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'cyan',
    borderRadius: 10
  }
});
