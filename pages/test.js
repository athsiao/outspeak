import React from 'react';
import { StyleSheet, Image, Text, View, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

export default function Test() {
  return (
    <ScrollView>
      <View style={{ marginTop: 25 }}>
        <SingleRow />
      </View>
    </ScrollView>
  );
}

class SingleRow extends React.Component {
  constructor(props) {
    super(props);
    const slides = [
      {
        key: '11 MB',
        text: 'FREE ',
        title: 'Mobile ',
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        backgroundColor: '#20d2bb',
      },
      {
        key: '52 MB',
        title: 'Flight ',
        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',
        backgroundColor: '#febe29',
      },
      {
        key: '14 MB',
        text: 'FREE',
        title: 'Great ',

        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',

        backgroundColor: '#22bcb5',
      },
      {
        key: '45 MB',
        title: 'Best ',

        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',

        backgroundColor: '#3395ff',
      },
      {
        key: '33 MB',
        title: 'Bus ',
        text: 'FREE',

        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',

        backgroundColor: '#f6437b',
      },
      {
        key: '77 MB',
        title: 'Train ',

        uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/old_logo.png',

        backgroundColor: '#febe29',
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
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {global.slides.map((item, key) => (
                <View style={{ margin: 5 }}>
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
                    <Text style={{ color: '#228B22' }}>&#8942;</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{ color: '#606070', fontWeight: '200' }}>
                      {item.key}
                    </Text>
                    <Text style={{ color: '#228B22' }}>{item.text}</Text>
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