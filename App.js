import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, RefreshControl, FlatList, SectionList, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import CustomButton from './components/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function ScreenA({ navigation }) {
  const onpressable = () => {
    navigation.navigate('Screen_B')
    // navigation.replace('Screen_B')
  }
  return (
    <View style={styles.body}>
      <Text>
        Screen A
      </Text>
      <Pressable onPress={onpressable} style={({ pressed }) => ({
        backgroundColor: pressed ? '#ddd' : '#0f0'
      })} >
        <Text>
          Goto Screen B
        </Text>
      </Pressable>
    </View>
  )
}
function ScreenB({ navigation }) {
  const onpressable = () => {
    // navigation.navigate('Screen_B')
    navigation.goBack()
  }
  return (
    <View style={styles.body}>
      <Text>
        Screen B
      </Text>
      <Pressable onPress={onpressable} style={({ pressed }) => ({
        backgroundColor: pressed ? '#ddd' : '#0f0'
      })} >
        <Text>
          Goto Screen A
        </Text>
      </Pressable>
    </View>
  )
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Screen_A' component={ScreenA}
          options={{
            header: () => null
          }}
        />
        <Stack.Screen name='Screen_B' component={ScreenB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currenHeight || 0
  },
});
