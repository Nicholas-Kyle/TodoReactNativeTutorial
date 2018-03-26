import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './app/Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Todo/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ef58bd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
