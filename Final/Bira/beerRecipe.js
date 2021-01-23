import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image } from 'react-native';

export default class Appbeer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>Bira Adı:{item.name} {"\n"}Yorum:{item.tagline} {"\n"}Açıklama:{item.description}
                 
              </Text>
              
             
            )}
          />
        )}
      </View>
    );
  }
};