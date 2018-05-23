import React, { Component } from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';

export default class Home extends Component {
  render() {
    return (
      <View>
        <RkText rkType="large primary"> Home</RkText>
      </View>
    )
  }
}
