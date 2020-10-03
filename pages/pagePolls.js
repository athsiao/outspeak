import React from 'react'
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class PollsScreen extends React.Component {

    render() {
      return(
        // polls screen content
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> This is my Polls screen </Text>
  
        </View>
      );
    }
  }

// navigation bar
export const PollsNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: PollsScreen,
      navigationOptions: {
        headerTitle: 'Polls'
      }
    }
  })
)