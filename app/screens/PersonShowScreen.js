import React from 'react';
import { AppRegistry, Component, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
//import StatusBarBackground from './app/components/StatusBarBackground'


export default class PersonShowScreen extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ViewContainer style={{backgroundColor: "dodgerblue"}}>
        <Text style={{marginTop: 100, fontSize: 20}}>PERSON SHOW SCREEN</Text>
        
      </ViewContainer>
    )
  }
}


const styles = StyleSheet.create({
  eventName: {
    marginLeft: 25
  },
});

module.exports = PersonShowScreen