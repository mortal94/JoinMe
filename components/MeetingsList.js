import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import MeetingComponent from "./MeetingComponent";

export default class MeetingsList extends Component {
  render() {
    return (
      <View>
        <ScrollView>
          <MeetingComponent/>
        </ScrollView>
      </View>
    )
  }
}
