import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon,ListItem,Tile } from 'react-native-elements';

export default class SigEvent extends Component{
      render(){
        return(
            <View>
                <Card>
                <ListItem style={{ marginLeft: -15, marginRight: -15, marginBottom: -15, marginTop: -15}}
                    roundAvatar
                    title= {"Ideal Drugs in the Area"}
                    subtitle={<Button
                      buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                      title='View Event!' />}
                    linearGradientProps={{
                      colors: ['#FF9800', '#F44336'],
                      start: { x: 1, y: 0 },
                      end: { x: 0.2, y: 0 },
                    }}
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