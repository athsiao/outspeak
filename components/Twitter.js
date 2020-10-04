import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card,Button,Icon,ListItem } from 'react-native-elements';

export default class TwitterIntegration extends Component{
    /*temporary data*/
    constructor(props) {
        super(props);
        const slides = [
          {
            name: 'Athena Siaotong',
            district: 42,
            state: 'California',
            uri: 'https://media-exp1.licdn.com/dms/image/C5603AQH0ma0S6Hh31A/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=1kn4W5wkRrj9VVkvVXkhnFw-WokFJ-M1HApoX37AgmE',
            contents: 'This cannot be a partisan moment. It must be an American moment.'
          },
          {
            name: 'Chasen Lee',
            district: 1,
            state: 'California',
            uri: 'https://media-exp1.licdn.com/dms/image/C5103AQGEf07aQpQB1g/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=28dcaEVeCqDXPP0VB_VK8-voyRhoc9QmnHZKWS9zNOE',
            contents: 'Short people have no rights.'
          },
          {
            name: 'Gabrielle Carr',
            district: 12,
            state: 'New York',
            uri: 'https://media-exp1.licdn.com/dms/image/C5603AQGXmGlbGmlDmw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=67pyfH66d3CD7YgHyHUIrd81R5vYtyQAQczi2fazzpI',
            contents: 'Make Classical Music Hip Again!'
          },
          {
            name: 'Shivanshu Gupta',
            district: 66,
            state: 'Wyoming',
            uri: 'https://media-exp1.licdn.com/dms/image/C5603AQFaDSfdUHo1gg/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=Tl9mFHx52kV-q9kdK6CI8r6iYrlmCXAvHkf0LJXsoI8',
            contents: 'This cannot be an American moment. It must be a partisan moment.'
          },
        ];
        global.slides = slides;
    }
      render(){
        return(
            <View>
                {global.slides.map((item, key) => (
                <Card>
                <ListItem
                    roundAvatar
                    title= {item.name}
                    subtitle={item.state + " District " + item.district + " • " + String.fromCharCode( "f00f" ) + "9hrs"}
                    leftAvatar={{ source: {uri: item.uri} }}
                />
                    <Text style={{ marginLeft: 13,
                        marginBottom: 10}}>
                        {item.contents}
                    </Text>
                </Card>
                ))}
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