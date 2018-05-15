import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {RkButton, RkTextInput, RkText} from 'react-native-ui-kitten';

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
        };
    }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <RkText rkType='large primary'> Join JOINmE </RkText>
        <RkTextInput label='email' onChangeText={(text) => this.setState({email: text})} value={this.state.email} />
        <RkTextInput label='password' onChangeText={(text) => this.setState({password: text})} value={this.state.password} />
        <RkTextInput label='first name' onChangeText={(text) => this.setState({firstName: text})} value={this.state.firstName} />
        <RkTextInput label='last name' onChangeText={(text) => this.setState({lastName: text})} value={this.state.lastName} />
        <RkButton rkType='rounded stretch'>Sign Up!</RkButton>
        <View style={styles.register}>
            <Text>Already have an account?</Text>
            <RkButton rkType='clear' onPress={() => navigate('Login')} >
                <RkText rkType='header6'> Login </RkText>
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
