import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Navigation } from '../Navigation';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContentContainer}>
        <Text>Hello World</Text>
      </View>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: 24
  },
  mainContentContainer: {
    flex: 1,
    padding: 24
  }
});

export default App;
