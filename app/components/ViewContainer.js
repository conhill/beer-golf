'use strict'
import React from 'react';
import { Component, View, StyleSheet } from 'react-native'

class ViewContainer extends React.Component{
  render() {
    return (
			<View style={[styles.viewContainer, this.props.style || {}]}>
				{this.props.children}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	viewContainer: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		height: "100%"

	}
})

module.exports = ViewContainer