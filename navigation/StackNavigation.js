import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import PollsScreen from "../pages/pollsPage";
import HomeScreen from "../pages/homePage.js";
import SettingsScreen from "../pages/settingsPage";


const Stack = createStackNavigator()

const MainStackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} options={{ title: 'Home Screen' }} />
          <Stack.Screen name='Settings' component={SettingsScreen} options={{ title: 'Settings Screen' }} />
        </Stack.Navigator>
    );
  };

  export { MainStackNavigator };
