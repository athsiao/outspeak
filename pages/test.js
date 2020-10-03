import * as React from 'react'
import {StyleSheet, Image, View, Text, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Card } from 'react-native-elements';



class TestScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 25 }}>
          <SingleRow />
        </View>
      </ScrollView>
    );
  }
}

class SingleRow extends React.Component {
  constructor(props) {
    super(props);

    /* Temporary data */
    // including apostrophes in contents will break this
    const slides = [
      {
        id: 1,
        name: 'Barack Obama',
        contents: 'The cynics may be the loudest voices - but I promise you, they accomplish the least.',
        uri: 'https://static.politico.com/dims4/default/5b44cca/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc0%2Fb2%2Fa9fc15064ee1bfdc2a5175128beb%2F200409-obama-getty-773.jpg',
        backgroundColor: '#20d2bb',
      },
      {
        id: 2,
        name: 'Barack Obama',
        contents: 'Theres not a liberal America and a conservative America - theres the United States of America.',
        uri: 'https://static.politico.com/dims4/default/5b44cca/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc0%2Fb2%2Fa9fc15064ee1bfdc2a5175128beb%2F200409-obama-getty-773.jpg',
        backgroundColor: '#20d2bb',
      },
      {
        id: 3,
        name: 'Barack Obama',
        contents: 'The cynics may be the loudest voices - but I promise you, they accomplish the least.',
        uri: 'https://static.politico.com/dims4/default/5b44cca/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc0%2Fb2%2Fa9fc15064ee1bfdc2a5175128beb%2F200409-obama-getty-773.jpg',
        backgroundColor: '#20d2bb',
      },
      {
        id: 4,
        name: 'Barack Obama',
        contents: 'Theres not a liberal America and a conservative America - theres the United States of America.',
        uri: 'https://static.politico.com/dims4/default/5b44cca/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc0%2Fb2%2Fa9fc15064ee1bfdc2a5175128beb%2F200409-obama-getty-773.jpg',
        backgroundColor: '#20d2bb',
      },
      {
        id: 3,
        name: 'Barack Obama',
        contents: 'The cynics may be the loudest voices - but I promise you, they accomplish the least.',
        uri: 'https://static.politico.com/dims4/default/5b44cca/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc0%2Fb2%2Fa9fc15064ee1bfdc2a5175128beb%2F200409-obama-getty-773.jpg',
        backgroundColor: '#20d2bb',
      },
      {
        id: 4,
        name: 'Barack Obama',
        contents: 'Theres not a liberal America and a conservative America - theres the United States of America.',
        uri: 'https://static.politico.com/dims4/default/5b44cca/2147483647/resize/1160x%3E/quality/90/?url=https%3A%2F%2Fstatic.politico.com%2Fc0%2Fb2%2Fa9fc15064ee1bfdc2a5175128beb%2F200409-obama-getty-773.jpg',
        backgroundColor: '#20d2bb',
      },
    ];
    global.slides = slides;
  }

  onPressLearnMore() {
    alert('Hello');
  }

  render() {
    return (
      <View>
        <Card
          containerStyle={{
            backgroundColor: '#FFFFFF',
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
          }}>

          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <Text style={{ color: '#606070', fontWeight: 'bold' }}>
              Recommended for You
            </Text>

            <Text style={{ color: '#228B22' }} onPress={() => alert('MORE')}>
              MORE
            </Text>
          </View>

          <View style={{ flexDirection: 'row', width: '100%' }}>
            <ScrollView>
              {global.slides.map((item, contents) => (
                <View style={{ margin: 5 }}>

                  {/* Profile picture */}
                  <Image
                    source={{
                      uri: item.uri,
                    }}
                    style={{ width: 70, height: 70, margin: 10 }}
                  />

                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>

                    <Text
                      style={{ color: '#494949', fontWeight: '200' }}
                      onPress={() => {
                        alert('Title ' + item.title + ' Clicked');
                      }}>
                      {item.title}
                    </Text>
            
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#606070', fontWeight: '200' }}>
                      {item.contents}
                    </Text>
                    
                  </View>
                </View>
              ))}
            </ScrollView>
          </View>
        </Card>
      </View>
    );
  }
}

// navigation
export const TestNavigator = createAppContainer(
  createStackNavigator({
    Home: {
      screen: TestScreen,
      navigationOptions: {
        headerTitle: 'Test',
      }
    }
  })
)
