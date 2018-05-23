import React, { Component } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { RkButton, RkCard, RkText, RkTheme } from "react-native-ui-kitten";

RkTheme.setType('RkCard', 'meeting', {
  img: {
    height: 125,
    opacity: 1
  },
  header: {
    flex: 1,
    padding: 5,
    fontSize: 24
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default class MeetingComponent extends Component {
  render() {
    return (
      <View style={styles.meeting}>
        <RkCard rkType='meeting'>
          <View>
            <RkText rkCardHeader>
              {`${this.props.meeting.type} In ${this.props.meeting.place}`}
            </RkText>
          </View>
          <Image rkCardImg source={require('../images/drone.jpg')}/>
          <View rkCardContent>
            <RkText>
              {`Age: ${this.props.meeting.age}`}
            </RkText>
            <RkText>
              {`Skill: ${this.props.meeting.skill}`}
            </RkText>
          </View>
          <View rkCardFooter>
            <RkButton rkType='small'>JoinMe</RkButton>
          </View>
        </RkCard>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  meeting: {
    paddingBottom: 10
  }
});