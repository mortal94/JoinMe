import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { RkTextInput, RkText } from 'react-native-ui-kitten';

export default class AddMeeting extends Component {
  state = {
    place: ''
  };

  render() {
    const { place } = this.state;

    return (
      <View style={styles.container}>
        <RkText rkType="large primary">Add Meeting</RkText>

        <RkTextInput
          rkType="rounded"
          placeholder="place"
          onChangeText={text => this.setState({ place: text })}
          value={place}
        />
        <RkTextInput
          rkType="rounded"
          label="email"
          onChangeText={text => this.setState({ email: text })}
          value={email}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  }
});
