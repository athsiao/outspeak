import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
// app pages
import { HomeNavigator } from './pages/pageHome.js';
import { PollsNavigator } from './pages/pagePolls.js';
import { SearchNavigator } from './pages/pageSearch.js';
import { ContactsNavigator } from './pages/pageContacts.js';
import { TestNavigator } from './pages/test.js';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

// navigation
const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-megaphone" color={tintColor} size={25} />
            )
      },
      
    },
    Polls: {
      screen: PollsNavigator,
      navigationOptions: {
        title: 'Polls',
        tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-podium" color={tintColor} size={25} />
            )
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        title: 'Search',
        tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-search" color={tintColor} size={25} />
            )
      }
    },
    Contacts: {
      screen: ContactsNavigator,
      navigationOptions: {
        title: 'Contacts',
        tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-contact" color={tintColor} size={25} />
            )
      }
    },
    Test: {
      screen: TestNavigator,
      navigationOptions: {
        title: 'Test',
        tabBarIcon: ({ tintColor }) => (
                <Ionicons name="ios-flask" color={tintColor} size={25} />
            )
      }
    }
  },

  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);
