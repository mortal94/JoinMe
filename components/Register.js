import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton, RkTextInput, RkText } from 'react-native-ui-kitten';
import FirebaseGateway from '../utils/firebase';

export default class Register extends React.Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  async signUpClicked(email, password, firstName, lastName, navigate) {
    await FirebaseGateway.signup(email, password);
    await FirebaseGateway.saveUserData(firstName, lastName);
    navigate('Login');
  }

  render() {
    const { navigate } = this.props.navigation;
    const { email, password, firstName, lastName } = this.state;
    return (
      <View style={styles.container}>
        <RkText rkType="large primary"> Join JoinMe </RkText>
        <RkTextInput
          label="email"
          onChangeText={text => this.setState({ email: text })}
          value={email}
        />
        <RkTextInput
          label="password"
          onChangeText={text => this.setState({ password: text })}
          value={password}
          secureTextEntry={true}
        />
        <RkTextInput
          label="first name"
          onChangeText={text => this.setState({ firstName: text })}
          value={firstName}
        />
        <RkTextInput
          label="last name"
          onChangeText={text => this.setState({ lastName: text })}
          value={lastName}
        />
        <RkButton rkType="rounded stretch"
                  onPress={() => this.signUpClicked(email, password, firstName, lastName, navigate)}>
          Sign Up!
        </RkButton>
        <View style={styles.register}>
          <Text>Already have an account?</Text>
          <RkButton rkType="clear" onPress={() => navigate('Login')}>
            <RkText rkType="header6"> Login </RkText>
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
    justifyContent: 'center'
  }
});
