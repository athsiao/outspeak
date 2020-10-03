import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { HomeNavigator } from './Home.js';
import { PollsNavigator } from './Polls.js';

export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}


class SearchScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Search screen </Text>
      </View>
    );
  }
}

class ContactsScreen extends React.Component {
  render() {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text> This is my Contacts screen </Text>
      </View>
    );
  }
}

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
      screen: SearchScreen,
      navigationOptions: {
        title: 'Search'
      }
    },
    Contacts: {
      screen: ContactsScreen,
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