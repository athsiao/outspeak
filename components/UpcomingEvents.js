import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card,Button,Icon,ListItem,Tile } from 'react-native-elements';

export default class SigEvent extends Component{
      render(){
        return(
          <View>
          <Card>
          <Text style={{ color: '#494949', fontWeight: '700', textAlign: 'center',
          paddingTop: 5, paddingBottom: 10 }}>
            March for our Lives
          </Text>

          <TouchableOpacity
            style={{
              backgroundColor: '#6d7acf',
              paddingVertical: 10,
              paddingHorizontal: 5,
              borderRadius: 7,
              borderWidth: 1,
              borderColor: '#5663b8'
            }}
            onPress={() => {
              alert(item.name + ' Clicked');
            }}>
              <Text style={{fontWeight: '600', textAlign: 'center', color: 'white'}}>
                See Event Page
              </Text>
          </TouchableOpacity>

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