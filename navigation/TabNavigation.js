import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from './StackNavigation';
import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ContactScreen from "../pages/contactPage";
import HomeScreen from "../pages/homePage.js";
import PollsScreen from "../pages/pollsPage";
import SearchScreen from "../pages/searchPage";
import SettingsScreen from "../pages/settingsPage";
import Test from "../pages/test";
import { TabBarIOS } from 'react-native';



const Tab = createBottomTabNavigator();

function BottomStackNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={MainStackNavigator}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          }}
                />
      <Tab.Screen name="Polls" component={PollsScreen} />
      <Tab.Screen name="Seach" component={ContactScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
      <Tab.Screen name="Test" component={Test} />
    </Tab.Navigator>
  )
}

export default BottomStackNavigator;