import React, { useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useStores } from '../../hooks';

function Navigation() {
  const [active, setActive] = useState('home');
  const { navigation } = useStores(['navigation']);

  return (
    <View style={styles.container}>
      <View style={getStyles(active, 'home').navigation}>
        <TouchableWithoutFeedback onPress={() => setActive('home')}>
          <Text style={getStyles(active, 'home').buttonText}>Home</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={getStyles(active, 'music').navigation}>
        <TouchableWithoutFeedback onPress={() => setActive('music')}>
          <Text style={getStyles(active, 'music').buttonText}>Music</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={getStyles(active, 'weather').navigation}>
        <TouchableWithoutFeedback onPress={() => setActive('weather')}>
          <Text style={getStyles(active, 'weather').buttonText}>Weather</Text>
        </TouchableWithoutFeedback>
      </View>

      <View style={getStyles(active, 'settings').navigation}>
        <TouchableWithoutFeedback onPress={() => setActive('settings')}>
          <Text style={getStyles(active, 'settings').buttonText}>Settings</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderTopWidth: 0.5,
    borderTopColor: '#333',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

function getStyles(active, value) {
  const isActive = active === value;

  return StyleSheet.create({
    buttonText: {
      color: isActive ? '#fff' : '#333',
      fontSize: 12,
    },
    navigation: {
      alignItems: 'center',
      backgroundColor: isActive ? '#333' : '#fff',
      fontSize: 10,
      justifyContent: 'center',
      height: 60,
      width: '25%',
    }
  });
};

export default Navigation;
