import 'react-native-gesture-handler';
import * as React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Homescreen = ({ navigation }) => {
    return (
        <Button
        title="Go to Home screen"
        onPress={() =>
          navigation.navigate('Home')
        }
      />
    );
  };

  export const SearchNavigator = createAppContainer(
    createStackNavigator({
      Home: {
        screen: SearchScreen,
        navigationOptions: {
          headerTitle: 'Search',
          headerRight: () => (
              <Button
                onPress={() =>
                  navigation.navigate('Search')
                }
                title="Info"
                color="#fff"
              />),
        }
      }
    })
  )