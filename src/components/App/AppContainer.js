import React from 'react';
import App from './App';
import { Provider } from './AppContext';
import { Music, Navigation, Weather } from '../../stores';


const stores = {
  music: new Music(),
  navigation: new Navigation(),
  weather: new Weather()
};

function AppContainer() {
  return (
    <Provider value={stores}>
      <App />
    </Provider>
  );
}

export default AppContainer;
