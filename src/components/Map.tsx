import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {useSelector} from 'react-redux';
import {selectOrigin} from '../slices/navSlices';

const Map = () => {
  const origin: any = useSelector(selectOrigin);

  console.log(origin);

  return (
    <MapView
      className="flex-1"
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin.location.lat,
        longitude: origin.location.lng,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}>
      <Marker
        coordinate={{
          latitude: origin.location.lat,
          longitude: origin.location.lng,
        }}
      />
    </MapView>
  );
};

export default Map;
