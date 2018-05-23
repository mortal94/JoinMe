import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RkButton, RkTextInput, RkText } from 'react-native-ui-kitten';
import FirebaseGateway from '../utils/firebase';

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loginFailed: false
  };

  handleLogin(email, password, navigate) {
    FirebaseGateway.login(email, password)
      .then(() => navigate('MeetingsList'))
      .catch(() => {
        this.setState({ loginFailed: true })
      })
  }

  render() {
    const { navigate } = this.props.navigation;
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <RkText rkType="large primary"> Login to JoinMe</RkText>
        { this.state.loginFailed && <RkText style={styles.errorMessage}>Email or password is incorrect</RkText> }
        <RkTextInput
          rkType='rounded'
          placeholder="email"
          onChangeText={text => this.setState({ email: text })}
          value={email}
        />
        <RkTextInput
          secureTextEntry={true}
          rkType='rounded'
          placeholder="Password"
          onChangeText={text => this.setState({ password: text })}
          value={password}
        />
        <RkButton rkType="rounded stretch" onPress={() => this.handleLogin(email, password, navigate)}>Login</RkButton>
        <View style={styles.register}>
          <Text>Don't have an account?</Text>
          <RkButton rkType="clear" onPress={() => navigate('Register')}>
            <RkText rkType="header6"> Sign up now </RkText>
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
    marginTop: 15
  },
  errorMessage: {
    color: 'red'
  }
});
