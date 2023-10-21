import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

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
  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item: Data) => item.id}
      renderItem={({item}) => {
        return (
          <TouchableOpacity className=" items-center justify-between w-40 h-40 m-2 bg-gray-100">
            <Image
              source={item.image}
              style={{width: 120, height: 120, resizeMode: 'contain'}}
            />
            <Text className="w-full text-xl font-bold mb-2 px-4">
              {item.title}
            </Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
