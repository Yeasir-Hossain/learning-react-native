import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView, RefreshControl, FlatList, SectionList, TextInput, TouchableOpacity, Pressable, Image } from 'react-native';
import CustomButton from './components/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './components/ScreenA';
import ScreenB from './components/ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconname;
            if (route.name === 'Screen_A') {
              iconname = 'atlassian';
              size = focused ? 25 : 20;
              color = focused? 'pink' : 'grey'
            }
            else if (route.name === 'Screen_B') {
              iconname = 'btc'
              size = focused ? 25 : 20
              color = focused? 'pink' : 'grey'
            }
            return (
              <FontAwesome5 name={iconname} size={size} color={color} ></FontAwesome5>
            )
          }
        })}
      >
        <Tab.Screen name='Screen_A' component={ScreenA}
        />
        <Tab.Screen name='Screen_B' component={ScreenB} />
      </Tab.Navigator>
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
