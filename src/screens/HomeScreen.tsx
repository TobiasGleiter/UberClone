import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="p-5">
        <Image
          source={require('../assets/images/Uber.png')}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
