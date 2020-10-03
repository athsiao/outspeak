import React from 'react'
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class HomeScreen extends React.Component {

    render() {
      return(
        // home screen content
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> This is my Home screen </Text>
  
        </View>
      );
    }
  }

// navigation bar
export const HomeNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerTitle: 'Home'
      }
    }
  })
)