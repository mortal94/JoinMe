import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import FirebaseGateway from '../utils/firebase';
import MeetingComponent from './MeetingComponent';
import { RkButton, RkText } from "react-native-ui-kitten";

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
    const meetings = this.state.meetings.map((x, i) => <MeetingComponent key={i} meeting={x}/>);
    const { navigate } = this.props.navigation;
    return (
      <View>
        <RkText style={styles.header} rkType="primary">JOIN<RkText style={styles.headerM} rkType="primary">m</RkText>E</RkText>
        <ScrollView>
          {meetings}
        </ScrollView>
        <RkButton style={styles.floatingButton} onPress={() => navigate('AddMeeting')}>+</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerM:{
    fontSize: 70
  },
  header:{
    fontSize: 50,
    textAlign: 'center'
  },
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 30,
    height: 60,
    width: 60,
    zIndex: 666
  }
});
