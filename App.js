import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import MeetingsList from './components/MeetingsList';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
  Login,
  Register,
  MeetingsList
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
