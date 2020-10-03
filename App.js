import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

// app pages
import { HomeNavigator } from './pages/pageHome.js';
import { PollsNavigator } from './pages/pagePolls.js';
import { SearchNavigator } from './pages/pageSearch.js';
import { ContactsNavigator } from './pages/pageContacts.js';

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