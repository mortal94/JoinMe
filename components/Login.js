import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
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
        <RkText style={styles.header} rkType="primary">JOIN<RkText style={styles.headerM} rkType="primary">m</RkText>E</RkText>
        <Image style={styles.logo}
               resizeMode="contain"
               source={require('../images/fistbump-temp.png')}/>
        { this.state.loginFailed && <RkText style={styles.errorMessage}>Email or password is incorrect</RkText> }
        <View style={styles.formContainer}>
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
          <RkButton style={styles.loginButton} rkType="rounded stretch" onPress={() => this.handleLogin(email, password, navigate)}>Login</RkButton>
          <View style={styles.register}>
            <Text>Don't have an account?</Text>
            <RkButton rkType="clear" onPress={() => navigate('Register')}>
              <RkText rkType="header6"> Sign up now </RkText>
            </RkButton>
          </View>
        </View>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
    paddingBottom: 30
  },
  formContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50
  },
  logo:{
    flex: 1,
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
  register: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15
  },
  loginButton: {
    marginTop: 15
  },
  errorMessage: {
    color: 'red'
  }
});
