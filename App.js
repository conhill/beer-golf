'use strict'
import React from 'react';
import { AppRegistry, Component, StyleSheet } from 'react-native';
import PeopleIndexScreen from './app/screens/PeopleIndexScreen';
import CustomComponents from 'react-native-deprecated-custom-components';
import PersonShowScreen from './app/screens/PersonShowScreen';
// const events = [
//   {location: 'Create'},
//   {location: 'Join'}
// ]

// {ident: "PeopleIndex"}
// {ident: "PeopleShow",
//   personId: 14}
export default class index extends   React.Component {
 
 _renderScene(route, navigator){
  var globalNavigatorProps = { navigator }

  switch(route.ident) {
    case "PeopleIndex":
      return (
        <PeopleIndexScreen {...globalNavigatorProps} />
      )

    case "PersonShow":
      return(
         <PersonShowScreen {...globalNavigatorProps}
          event={route.person} />
        
        )
    
    default:
      return (
        <PeopleIndexScreen {...globalNavigatorProps} />
      )
  }

 } 

  render(){
    return (
      <CustomComponents.Navigator 
        initialRoute={{ident: "PeopleIndex"}}
        ref="appNavigator"
        style={styles.navigatorStyles}
        renderScene={this._renderScene}
        configureScene={(route) => ({
            ...route.sceneConfig || CustomComponents.Navigator.SceneConfigs.FloatFromRight })} />
    )
  }

}

const styles = StyleSheet.create({

  navigatorStyle : {

  }

});

AppRegistry.registerComponent('index', () => index)