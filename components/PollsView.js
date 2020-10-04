import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon } from 'react-native-elements';

export default class TwitterIntegration extends Component{
      render(){
        return(
            <View>
                <Card>
                    <Card.Title>HELLO WORLD</Card.Title>
                    <Card.Divider/>
                    <Card.Image source={require('../assets/AMERICA.png')} />
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
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