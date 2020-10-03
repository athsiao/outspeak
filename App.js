import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeNavigator } from './pageHome.js';
import { PollsNavigator } from './pagePolls.js';
import { SearchNavigator } from './pageSearch.js';
import { ContactsNavigator } from './pageContacts.js';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

// navigates between screens
const bottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeNavigator,
      navigationOptions: {
        title: 'Home'
      },
    },
    Polls: {
      screen: PollsNavigator,
      navigationOptions: {
        title: 'Polls'
      }
    },
    Search: {
      screen: SearchNavigator,
      navigationOptions: {
        title: 'Search'
      }
    },
    Contacts: {
      screen: ContactsNavigator,
      navigationOptions: {
        title: 'Contacts'
      }
    }
  },

  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(bottomTabNavigator);