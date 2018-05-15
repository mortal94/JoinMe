import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Login: Login,
  Register: Register
},
{
  initialRouteName: 'Login',
});

export default class App extends React.Component {
  render() {
    return (
      <RootStack/>
    );
  }
}