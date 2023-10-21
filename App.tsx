/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = 'bg-white dark:bg-black';

  return (
    <Provider store={store}>
      <SafeAreaView>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <View
          className={`h-full w-full items-center justify-center ${backgroundStyle}`}>
          <Text className="text-white text-xl font-bold">
            This is a Uber Clone!
          </Text>
        </View>
      </SafeAreaView>
    </Provider>
  );
}

export default App;
