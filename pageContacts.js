import React from 'react'
import { Button, View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

class ContactsScreen extends React.Component {

    render() {
      return(
        // contacts page content
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text> This is my Contacts screen </Text>
  
        </View>
      );
    }
  }

// navigation bar
export const ContactsNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: ContactsScreen,
      navigationOptions: {
        headerTitle: 'Contacts'
      }
    }
  })
)