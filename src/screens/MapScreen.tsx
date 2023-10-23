import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Nav} from '../types/routes';

const MapScreen = () => {
  const navigation = useNavigation<Nav>();

  return (
    <SafeAreaView>
      <Text>MapScreen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
};

export default MapScreen;
