import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Login,
  Register,
  Home
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
