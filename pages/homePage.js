import React from "react";
import TwitterIntegration from '../components/Twitter';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon } from 'react-native-elements';

class HomeScreen extends React.Component {
  render () {
    return (
      <ScrollView>
          <TwitterIntegration />
      </ScrollView>
    )
  }
};


export default HomeScreen;
