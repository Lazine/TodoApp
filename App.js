import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import ListView from './src/ListView';

export default class TodoApp extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ListView/>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
    paddingBottom: 10,
    paddingLeft: 2,
    paddingRight: 2,
    backgroundColor: '#F8F8F8',
  }
});

// AppRegistry.registerComponent('TodoApp', () => TodoApp);