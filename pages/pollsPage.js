import React from "react";
import { StyleSheet, Image, Text, View, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';

const PollsScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={{ marginTop: 25 }}>
        <SingleRow />
      </View>
    </ScrollView>
  );
};

class SingleRow extends React.Component {
  constructor(props) {
    super(props);
    const categories = [
      {
        id: 1,
        name: 'Trending',
      },
      {
        id: 2,
        name: 'Featured',
      },
      {
        id: 3,
        name: 'Elections',
      },
      {
        id: 4,
        name: 'LGBTQ+',
      },
      {
        id: 5,
        name: 'Education',
      },
      {
        id: 6,
        name: 'Immigration',
      },
      {
        id: 7,
        name: 'Death Penalty',
      },
      {
        id: 8,
        name: 'Environmental',
      },
    ];
    global.categories = categories;
  }
  onPressLearnMore() {
    alert('Hello');
  }

  render() {
    return (
      <View>
        <Card
          containerStyle={{
            backgroundColor: '#F8F8F8',
            marginLeft: 0,
            marginRight: 0,
            marginTop: 25,
          }}>
          <View style={{ flexDirection: 'row', width: '100%'}}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}>
              {global.categories.map((item, id) => (
                <View style={{ margin: 5 }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <TouchableOpacity
                      style={{
                        backgroundColor: 'white',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        borderRadius: 7,
                        borderWidth: 1,
                        borderColor: '#E5E5E5'
                      }}
                      onPress={() => {
                        alert(item.name + ' Clicked');
                      }}>
                        <Text style={{fontWeight: '600'}}>
                          {item.name}
                        </Text>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
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

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
});

export default PollsScreen;
