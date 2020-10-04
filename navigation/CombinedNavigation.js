import { TabNavigator, StackNavigator } from 'react-navigation'

import ContactScreen from "../pages/contactPage";
import HomeScreen from "../pages/homePage.js";
import PollsScreen from "../pages/pollsPage";
import SearchScreen from "../pages/searchPage";
import SettingsScreen from "../pages/settingsPage";
import Test from "../pages/test";

export const SettingsScreenStack = StackNavigator({
    Home: { screen: HomeScreen },
    Settings: { screen: SettingsScreen },
  }, {
    initialRoute: 'Home',
})

export const TabNavigation = TabNavigator({
    SettingsScreenStack: { screen: SettingsScreenStack },
    SearchScreen: { screen: SearchScreen },
    Test: { screen: Test },
  }, {
    initialRouteName: 'SettingsScreenStack',
});
