import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Card,Button,Icon,ListItem } from 'react-native-elements';

export default class PleaseVote extends Component{
      render(){
        return(
            <View>
                <Card>
                <Text style={{ color: '#494949', fontWeight: '700', textAlign: 'center',
                paddingTop: 5 }}>
                  Haven't Registered to Vote Yet?
                </Text>

                <Text style={{ color: '#494949', fontWeight: '400', textAlign: 'center',
                paddingVertical: 5, paddingBottom: 10 }}>
                  Register in just 3 steps!
                </Text>

                <TouchableOpacity
                  style={{
                    backgroundColor: '#db4946',
                    paddingVertical: 10,
                    paddingHorizontal: 5,
                    borderRadius: 7,
                    borderWidth: 1,
                    borderColor: '#a83734'
                  }}
                  onPress={() => {
                    alert(item.name + ' Clicked');
                  }}>
                    <Text style={{fontWeight: '600', textAlign: 'center', color: 'white'}}>
                      Register Now!
                    </Text>
                </TouchableOpacity>

                </Card>

            </View>
            );
      }
    };

// const styles = StyleSheet.create({
//     center: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       textAlign: "center",
//     },
//   });