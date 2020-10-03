import React from 'react'
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class SearchScreen extends React.Component {

    render() {
      return(
        // search page content
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> This is my Search screen </Text>
  
        </View>
      );
    }
  }

// navigation bar
export const SearchNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: SearchScreen,
      navigationOptions: {
        headerTitle: 'Search'
      }
    }
  })
)