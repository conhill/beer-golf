import React from 'react';
import { AppRegistry, Component, StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import ViewContainer from '../components/ViewContainer';
import CustomComponents from 'react-native-deprecated-custom-components';
import _ from 'lodash';
import Icon from 'react-native-vector-icons/FontAwesome';
//import StatusBarBackground from './app/components/StatusBarBackground'

const events = [
  {location: 'Create'},
  {location: 'Join'}
]

export default class PeopleIndexScreen extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      eventsDataSource: ds.cloneWithRows(events)
    }
  }
  render() {
    return (
      <ViewContainer>
        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.eventsDataSource}
          renderRow={(event) => { return this._renderEventRow(event) }} />
      </ViewContainer>
    )
  }


  _renderEventRow(event){
    return (
      <TouchableOpacity style={styles.eventRow} onPress={(event) => this._navigateToPersonShow(event)}>
        <Text style={styles.eventName}>{_.capitalize(event.location)}</Text>
        <View style={{flex: 1}} />
        <Icon name="chevron-right" size={20} style={styles.eventMoreIcon}/>
      </TouchableOpacity>
    )
  }

  _navigateToPersonShow(event){
  	this.props.navigator.push({
  		ident: "PersonShow",
  		event,
  		sceneConfig: CustomComponents.Navigator.SceneConfigs.FloatFromBottom
  	})
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  eventRow:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'black',
    width: 200,
    padding: 20,
    margin: 20
  },
  eventName: {
    marginLeft: 25
  },
  eventMoreIcon: {
    color: "blue",
    height: 20,
    width: 20,
    marginRight: 25,
  }
});

module.exports = PeopleIndexScreen