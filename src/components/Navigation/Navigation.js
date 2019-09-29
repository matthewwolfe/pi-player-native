import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { NavigationItem } from '../NavigationItem';
import { useStores } from '../../hooks';

function Navigation() {
  return (
    <View style={styles.container}>
      <NavigationItem label="Home" name="home" />
      <NavigationItem label="Music" name="music" />
      <NavigationItem label="Weather" name="weather" />
      <NavigationItem label="Settings" name="settings" />
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

export default Navigation;
