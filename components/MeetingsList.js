import React, { Component } from 'react';
import { AsyncStorage, View, ScrollView, StyleSheet } from 'react-native';
import FirebaseGateway from '../utils/firebase';
import MeetingComponent from './MeetingComponent';
import { RkButton } from "react-native-ui-kitten";

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
    this.logout = this.logout.bind(this)
  }

  logout()
  {
    const { navigate } = this.props.navigation;
    AsyncStorage.setItem('@userSessionStore:loggedOnUser', '')
        .then(()=> navigate('Login'))
        .catch(() => this.setState({ logoutFailed: true }))
  }

  render() {
    const meetings = this.state.meetings.map((x, i) => <MeetingComponent key={i} meeting={x}/>);
    const { navigate } = this.props.navigation;
    return (
      <View>
        <ScrollView>
          {meetings}
        </ScrollView>
        <RkButton style={styles.floatingButton} onPress={() => navigate('AddMeeting')}>+</RkButton>
        <RkButton style={styles.floatingLogoutButton} onPress={this.logout}>LO</RkButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerM:{
    fontSize: 70
  },
  header:{
    fontSize: 50
  },
  floatingButton: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    borderRadius: 30,
    height: 60,
    width: 60,
    zIndex: 666
  },
  floatingLogoutButton: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    borderRadius: 30,
    height: 60,
    width: 60,
    zIndex: 666
  }
});
