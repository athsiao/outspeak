import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import {Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import PollsScreen from "../pages/pollsPage";
import HomeScreen from "../pages/homePage.js";
import SettingsScreen from "../pages/settingsPage";


const Stack = createStackNavigator()

const MainStackNavigator = ({ navigation }) => {
    return (
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen 
            name='Home' 
            component={HomeScreen} 
            options={{ 
              title: 'Home', 
              headerRight: () => (
                <Ionicons
                name='ios-settings'
                size={30}
                style={{ marginLeft:5, padding:5, color: "black" }}
                onPress={()=> navigation.navigate('Settings')}
                />
          ),
          }} />
          <Stack.Screen name='Settings' component={SettingsScreen} options={{ title: 'Settings Screen' }} />
        </Stack.Navigator>
    );
  };

  export { MainStackNavigator };
