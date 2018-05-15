import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RkButton, RkTextInput, RkText} from 'react-native-ui-kitten';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            Password: ""
        };
    }
  render() {
    return (
      <View style={styles.container}>
        <RkText rkType='large primary'> JOINmE </RkText>
        <RkTextInput label='email' onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
        <RkTextInput label='Password' content={this.state.Password} />
        <RkButton rkType='rounded stretch'>Login</RkButton>
        <View style={styles.register}>
            <Text>Don't have an account?</Text>
            <RkButton rkType='clear'>
                <RkText rkType='header6'> Sign up now </RkText>
            </RkButton>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  register: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
