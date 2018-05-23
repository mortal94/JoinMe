import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import FirebaseGateway from '../utils/firebase';
import MeetingComponent from './MeetingComponent';

export default class MeetingsList extends Component {
  state = {
    meetings: []
  };

  componentDidMount() {
    FirebaseGateway.getAllMeetings(snapshot => {
      if (snapshot.exists()) {
        const meetings = snapshot.val();
        this.setState({ meetings: Object.values(meetings) });
      }
    });
  }

  render() {
    return (
      <View>
        <ScrollView>
          <MeetingComponent />
        </ScrollView>
      </View>
    );
  }
}
