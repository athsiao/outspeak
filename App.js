import React from 'react'
import BottomTabNavigator from './navigation/TabNavigation';
import { NavigationContainer } from "@react-navigation/native";
import { createAppContainer } from 'react-navigation';
//import TabNavigation from './navigation/CombinedNavigation';
const AppContainer = createAppContainer(BottomTabNavigator);

export default function App() {
  return (
    <NavigationContainer>
       <BottomTabNavigator />
    </NavigationContainer>
    );
};