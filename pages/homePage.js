import React from "react";
import TwitterIntegration from '../components/Twitter';
import PleaseVote from '../components/PleaseVote';
import PollsIntegration from '../components/PollsView';
import SigEvent from '../components/UpcomingEvents';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon } from 'react-native-elements';

class HomeScreen extends React.Component {
  render () {
    return (
      <ScrollView>
          <TwitterIntegration />
          <PleaseVote />
          <PollsIntegration />
          <SigEvent />
      </ScrollView>
    )
  }
};


export default HomeScreen;
