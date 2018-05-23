import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import FirebaseGateway from '../utils/firebase';
import MeetingComponent from "./MeetingComponent";

export default class MeetingsList extends Component {
  componentDidMount() {
    FirebaseGateway.getAllMeetings(snapshot => {
      if (snapshot.exists()) {
        const meetings = snapshot.val();
        console.log(meetings);
        this.setState({ meetings })
      }
    })
  }

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
