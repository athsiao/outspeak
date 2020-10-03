import React, {Component} from 'react'
import {
      AppRegistry,
      ListView,
      StyleSheet,
      Text,
      View,
      TouchableHighlight,
      AlertIOS,
      ReactNative
    } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

const Firebase = require('firebase');
const StatusBar = require('../components/StatusBar.js');
const ActionButton = require('../components/ActionButton.js');
const ListItem = require('../components/ListItem.js');
const styles = require('../assets/styles.js')

const firebaseConfig = {
  apiKey: "AIzaSyC3ebdIS2Hyt0QDL7A4_QJC0Nuu6lK6jUE",
  authDomain: "firereactbasenative.firebaseapp.com",
  databaseURL: "https://firereactbasenative.firebaseio.com",
  storageBucket: "",
};
const firebaseApp = Firebase.initializeApp(firebaseConfig);

class ContactsScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.itemsRef = this.getRef().child('items');
  }

  getRef() {
    return firebaseApp.database().ref();
  }

  listenForItems(itemsRef) {
    itemsRef.on('value', (snap) => {

      // get children as an array
      var items = [];
      snap.forEach((child) => {
        items.push({
          title: child.val().title,
          _key: child.key
        });
      });

      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(items)
      });

    });
  }

  componentDidMount() {
    this.listenForItems(this.itemsRef);
  }

  _addItem() {
    AlertIOS.prompt(
      'Add New Item',
      null,
      [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {
          text: 'Add',
          onPress: (text) => {
            this.itemsRef.push({ title: text })
          }
        },
      ],
      'plain-text'
    );
  }

  _renderItem(item) {

    const onPress = () => {
      AlertIOS.alert(
        'Complete',
        null,
        [
          {text: 'Complete', onPress: (text) => this.itemsRef.child(item._key).remove()},
          {text: 'Cancel', onPress: (text) => console.log('Cancelled')}
        ]
      );
    };

    return (
      <ListItem item={item} onPress={onPress} />
    );
  }

  render() {
    return (
      <View style={styles.container}>

        <StatusBar title="Grocery List" />

        <ListView
          dataSource={this.state.dataSource}
          renderRow={this._renderItem.bind(this)}
          enableEmptySections={true}
          style={styles.listview}/>

        <ActionButton onPress={this._addItem.bind(this)} title="Add" />

      </View>
    )
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
