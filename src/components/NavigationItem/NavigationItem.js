import React from 'react';
import { observer } from 'mobx-react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useStores } from '../../hooks';


function NavigationItem({label, name}) {
  const { navigation: { active, setActive } } = useStores(['navigation']);
  const isActive = active === name;
  const styles = getStyles(isActive);

  return (
    <View style={styles.navigation}>
      <TouchableWithoutFeedback onPress={() => setActive(name)}>
        <Text style={styles.buttonText}>{label}</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

function getStyles(isActive) {
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

export default observer(NavigationItem);
