import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, View } from 'react-native';
import { WEATHER_API_URL } from '../../../config/constants';

function WeeklyForecast() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    axios.get(WEATHER_API_URL)
      .then(({data}) => {
        setWeather(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      {weather &&
        <Text>Weather tomorrow: {weather.temperatureMax[1]}</Text>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WeeklyForecast;
