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
            <Ionicons
                name='ios-megaphone'
                size={size}
                color= {color}
                />
          ),
          }}
                />
      <Tab.Screen
        name="Polls"
        component={PollsScreen}
        options={{
          tabBarLabel: 'Polls',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="poll" color={color} size={size} />
          ),
          }}
                />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
          }}
                />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="contacts" color={color} size={size} />
          ),
          }}
                />
      <Tab.Screen name="Test"
      component={Test}
      options={{
        tabBarLabel: 'Test',
        tabBarIcon: ({ color, size }) => (
          <Ionicons
              name='ios-flask'
              size={size}
              color= {color}
              />
        ),
        }}
              />
    </Tab.Navigator>
  )
}

export default BottomStackNavigator;