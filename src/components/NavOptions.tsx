import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlices';
import {Nav} from '../types/routes';

type Data = {
  id: string;
  title: string;
  image: any;
  screen: string;
};

const data = [
  {
    id: '123',
    title: 'Get a ride',
    image: require('../assets/images/UberRide.png'),
    screen: 'MapScreen',
  },
  {
    id: '456',
    title: 'Order food',
    image: require('../assets/images/UberEat.png'),
    screen: 'EatsScreen',
  },
];

const NavOptions = () => {
  const navigation = useNavigation<Nav>();
  const origin = useSelector(selectOrigin);

  const handleOnPress = (screen: string) => {
    navigation.navigate(screen);
  };

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item: Data) => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            onPress={() => handleOnPress(item.screen)}
            className={`flex w-40 h-fit m-2 bg-gray-100 ${
              !origin && 'opacity-20'
            }`}
            disabled={!origin}>
            <View className="items-center">
              <Image
                source={item.image}
                style={{width: 120, height: 120, resizeMode: 'contain'}}
              />
              <Text className="w-full text-lg font-bold mb-2 px-4">
                {item.title}
              </Text>
            </View>
            <View className="mx-2 mb-2 flex items-center justify-center bg-black w-10 rounded-full h-10">
              <Icon name="arrowright" size={30} color="white" />
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
