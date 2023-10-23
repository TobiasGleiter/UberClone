import {GOOGLE_KEY} from '@env';
import React from 'react';
import {
  Image,
  SafeAreaView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useDispatch} from 'react-redux';
import NavOptions from '../components/NavOptions';
import {setDestination, setOrigin} from '../slices/navSlices';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useDispatch();

  return (
    <>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="w-full h-full bg-white">
        <View className="">
          <Image
            source={require('../assets/images/Uber.png')}
            style={{margin: 10, width: 100, height: 100, resizeMode: 'contain'}}
          />
          <View className="border-b mx-2">
            <GooglePlacesAutocomplete
              placeholder="Where From"
              minLength={2} // minimum length of text to search
              enablePoweredByContainer={false}
              onPress={(data, details = null) => {
                dispatch(
                  setOrigin({
                    location: details?.geometry.location,
                    description: data.description,
                  }),
                );
                dispatch(setDestination(null));
              }}
              fetchDetails={true}
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
          </View>
          <NavOptions />
        </View>
      </SafeAreaView>
    </>
  );
};

export default HomeScreen;
