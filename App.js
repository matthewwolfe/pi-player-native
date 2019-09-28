import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { App } from './src/components/App';

function Entry() {

  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default Entry;
