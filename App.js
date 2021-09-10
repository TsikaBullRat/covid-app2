import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, Prevention, getData, Stats } from './src';
import { View, Text } from 'react-native';

const Drawer = createDrawerNavigator()

export default function App() {

  const [sastats, getStats] = useState(null)
  const [all, getAll] = useState(null)
  
  useEffect(()=>{
    getData(getStats, "countries/South%20Africa")
    getData(getAll, 'all')
  },[])

  console.log(all)
  console.log(sastats)
  return (
    sastats?(
      <NavigationContainer>
      <Drawer.Navigator  >
        <Drawer.Screen name="Home">
          {props=><Home {...props} />}
        </Drawer.Screen>
        <Drawer.Screen name="Prevention" component={Prevention} />
        <Drawer.Screen name="Stats">
          {props=><Stats {...props} stats={sastats} all={all}/>}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
    ):null
  );
}

