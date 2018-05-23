import React, { Component } from 'react';
import { StyleSheet, View, DatePickerAndroid } from 'react-native';
import { RkTextInput, RkText, RkButton } from 'react-native-ui-kitten';
import FirebaseGateway from '../utils/firebase';

export default class AddMeeting extends Component {
  state = {
    place: '',
    meetingType: '',
    age: '',
    skill: '',
    selectedDate: new Date()
  };

  openDatePicker = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.setState({ selectedDate: new Date(year, month, day) });
      }
    } catch ({ code, message }) {
      console.warn('Cannot open date picker', message);
    }
  };

  handleAdd = async () => {
    const { navigate } = this.props.navigation;
    const { place, meetingType, age, skill, selectedDate } = this.state;
    await FirebaseGateway.addMeeting(place, meetingType, age, skill, selectedDate);

    navigate('MeetingsList');
  };

  render() {
    const { place, meetingType, age, skill, selectedDate } = this.state;

    return (
      <View style={styles.container}>
        <View>
          <RkText rkType="large primary">Add Meeting</RkText>
        </View>
        <View style={styles.form}>
          <RkTextInput
            rkType="rounded"
            placeholder="place"
            onChangeText={text => this.setState({ place: text })}
            value={place}
          />
          <RkTextInput
            rkType="rounded"
            placeholder="meeting type"
            onChangeText={text => this.setState({ meetingType: text })}
            value={meetingType}
          />
          <RkTextInput
            rkType="rounded"
            placeholder="age"
            onChangeText={text => this.setState({ age: text })}
            value={age}
          />
          <RkTextInput
            rkType="rounded"
            placeholder="skill"
            onChangeText={text => this.setState({ skill: text })}
            value={skill}
          />
          <View style={{flexDirection: 'row', marginTop: 20}}>
            <RkText style={{marginRight: 30}} >meeting date:</RkText>
            <RkText
              children={selectedDate.toLocaleDateString()}
              onPress={this.openDatePicker}
            />
          </View>

          <RkButton style={{marginTop: 30}} onPress={this.handleAdd}>
            Add
          </RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 50
  },
  form: {
    marginTop: 30,
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center'
  }
});
