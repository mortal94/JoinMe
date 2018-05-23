import React from 'react';
import Login from './components/Login';
import Register from './components/Register';
import MeetingsList from './components/MeetingsList';
import AddMeeting from './components/AddMeeting';
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
  {
    Login,
    Register,
    MeetingsList,
    AddMeeting
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none'
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
