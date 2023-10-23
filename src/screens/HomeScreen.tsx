import {GOOGLE_KEY} from '@env';
import React from 'react';
import {Image, SafeAreaView, View} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import NavOptions from '../components/NavOptions';

const HomeScreen = () => {
  return (
    <SafeAreaView className="w-full h-full bg-white">
      <View className="p-5">
        <Image
          source={require('../assets/images/Uber.png')}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <GooglePlacesAutocomplete
          placeholder="Search"
          minLength={2} // minimum length of text to search
          query={{
            // available options: https://developers.google.com/places/web-service/autocomplete
            key: GOOGLE_KEY,
            language: 'en', // language of the results
            types: '(cities)', // default: 'geocode'
          }}
          debounce={400}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
