import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon,ListItem } from 'react-native-elements';

export default class TwitterIntegration extends Component{
      render(){
        return(
            <View>
                <Card>
                <ListItem
                    roundAvatar
                    title= {"Athena Siaotong" + String.fromCharCode( "f00f" ) + "9hrs"}
                    subtitle={"@asiaotong"}
                    leftAvatar={{ source: {uri:('../assets/AMERICA.png')} }}
                />
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
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