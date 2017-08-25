import React from 'react';
import { AppRegistry, Component, StyleSheet, Text, View, ListView } from 'react-native';
import ViewContainer from './app/components/ViewContainer'

const events = [
  {location: 'Hardrock'},
  {location: 'Luxor'}
]

export default class App extends React.Component {
  constructor(props) {
    super(props);
    var da = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2})
    this.state = {
      eventsDataSource: ds.cloneWithRows(events)
    };
  }
  render() {
    return (
      <ViewContainer>
        <Text>{'Hewllo'}></Text>
        <ListView
          style={{marginTop: 100}}
          dataSource-{this.state.eventsDataSource}
          renderRow={(event) => { return this._renderEventRow(event) }}
      </ViewContainer>
    );
  }
}

_renderEventRow(event){
  return (
    <View style={styles.eventRow}>
      <Text style={stles.eventName}>{event.Location}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  eventRow:{

  }
  eventName: {

  }
});
