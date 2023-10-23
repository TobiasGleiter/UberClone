import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import Map from '../components/Map';
import {Nav} from '../types/routes';

const MapScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <View>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2"></View>
    </View>
  );
};

export default MapScreen;
