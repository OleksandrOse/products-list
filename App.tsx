import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import AppNavigator from './src/navigation/AppNavigator';
import * as Font from 'expo-font';

const fonts = () => Font.loadAsync({
  'rt-bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'rt-light': require('./assets/fonts/Roboto-Light.ttf')
});

export default function App() {
  const [font, setFont] = useState(false);

  if(font) {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn}
      />
    )
  }
}
