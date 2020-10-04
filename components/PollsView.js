import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon,CheckBox } from 'react-native-elements';

export default class PollsIntegration extends Component{

    constructor(props) {
        super(props);
        this.state = {keyChecked: 0};
      }

      render(){
        return(
            <View>
                <Card>
                    <Card.Title>When should people address climate change?</Card.Title>
                    <Card.Divider/>
                    <CheckBox
                        key = {1}
                        center
                        title='Right Now'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 1}
                        onPress={() => this.setState({keyChecked: 1})}
                    />
                    <CheckBox
                        key = {2}
                        center
                        title='Next few years'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 2}
                        onPress={() => this.setState({keyChecked: 2})}
                    />
                    <CheckBox
                        key = {3}
                        center
                        title='Further in the Future'
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 3}
                        onPress={() => this.setState({keyChecked: 3})}
                    />
                    <CheckBox
                        key = {4}
                        center
                        title="Doesn't need to be addressed"
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 4}
                        onPress={() => this.setState({keyChecked: 4})}
                    />
                </Card>
            </View>
            );
      }
    };

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    },
  });