import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon,CheckBox } from 'react-native-elements';

export default class PollsIntegration extends Component{

    constructor(props) {
        super(props);
        this.state = {keyChecked: 0};

        const categories = [
            {
              q: 'When should governments address the climate crisis?',
              a: 'Right now',
              b: 'In a few years',
              c: 'Not at all',
              d: 'Dont know',
            },
            {
                q: 'Should Biden add seats to the Supreme Court?',
                a: 'Yes, its fair',
                b: 'No, its unfair',
                c: 'Probably?',
                d: 'Dont care',
              },
              {
                q: 'Should corporate tax laws be lowered?',
                a: 'Yes, more corporations will repatriate assets',
                b: 'No, keep it the same',
                c: 'No, they should be raised',
                d: 'Dont care',
              },
              {
                q: 'Do you think donating money to politicians counts as free speech?',
                a: 'Yes, allow unlimited money',
                b: 'No, put a limit on donations',
                c: 'Probably not when lobbyists do it',
                d: 'Dont know',
            },
          ];
          global.categories = categories;
      }

      render(){
        return(
            <View style={{ flexDirection: 'row', width: '100%'}}>
                <ScrollView
                 vertical={true}
                 showsVerticalScrollIndicator={false}>
                {global.categories.map((item, key) => (
                    <Card>
                    <Card.Title>{item.q}</Card.Title>
                    <Card.Divider/>
                    <CheckBox
                        key = {1}
                        //center
                        title={item.a}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 1}
                        onPress={() => this.setState({keyChecked: 1})}
                    />
                    <CheckBox
                        key = {2}
                        //center
                        title={item.b}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 2}
                        onPress={() => this.setState({keyChecked: 2})}
                    />
                    <CheckBox
                        key = {3}
                        //center
                        title={item.c}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 3}
                        onPress={() => this.setState({keyChecked: 3})}
                    />
                    <CheckBox
                        key = {4}
                        //center
                        title={item.d}
                        checkedIcon='dot-circle-o'
                        uncheckedIcon='circle-o'
                        checked={this.state.keyChecked == 4}
                        onPress={() => this.setState({keyChecked: 4})}
                    />
                    </Card>
                    ))}
            </ScrollView>
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