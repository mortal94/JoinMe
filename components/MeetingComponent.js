import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { RkButton, RkCard, RkText, RkTheme } from "react-native-ui-kitten";

RkTheme.setType('RkCard', 'meeting', {
  img:{
    height: 125,
    opacity: 1
  },
  header: {
    flex: 1,
    padding: 5,
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
      <View>
        <RkCard rkType='meeting'>
          <View rkCardHeader>
            <RkText>
              Drone Flying in Rishon Leziyon
            </RkText>
          </View>
          <Image rkCardImg source={require('../images/drone.jpg')}/>
          <View rkCardContent>
            <RkText>
              Location: Bahad sheva
            </RkText>
            <RkText>
              Time: 18:00 PM
            </RkText>
          </View>
          <View rkCardContent>
            <RkText>
              Skill: Noobs
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