import React, {useEffect} from 'react';
import {View, Text, Animated, Image, Dimensions, StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import MapView, {Marker} from 'react-native-maps';
import {VenueApi} from '../../redux/actions/venues-get-actions';
import styles from './styles';
import Loading from '../../components/Loading';
import imagePath from '../../constants/imagePath';
const {width} = Dimensions.get('window');
const TOTAL_WIDTH = width * 0.7;

const Home = () => {
  let animation = new Animated.Value(0);
  const apiDispatch = useDispatch();
  useEffect(() => {
    apiDispatch(VenueApi());
  }, []);
  const Data = useSelector(state => state.VenueApiReducer);
  const [startLoc, setStartLoc] = React.useState({
    latitude: 25.2048,
    longitude: 55.2708,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

   const interpolations = Data.data.results?.map((item, index) => {
     const inputRange = [
       (index - 1) * TOTAL_WIDTH,
       index * TOTAL_WIDTH,
       (index + 1) * TOTAL_WIDTH,
     ];
     const scale = animation.interpolate({
       inputRange,
       outputRange: [1, 2, 1],
       extrapolate: 'clamp',
     });
     const opacity = animation.interpolate({
       inputRange,
       outputRange: [0.35, 1, 0.35],
       extrapolate: 'clamp',
     });
     return {scale, opacity};
   });
 

  return (
    <>
      <StatusBar backgroundColor={"#fff"} barStyle={"dark-content"}/>
      {Data.loading ? (
        <Loading/>
      ) : (
        <View style={styles.mapStyle}>
          <MapView style={styles.mapStyle} initialRegion={startLoc}>
            {Data.data.results?.map((item, index) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
              };
              const opacityStyle = {
                opacity: interpolations[index].opacity,
              };
              return (
                <Marker
                  key={index}
                  coordinate={{latitude: item.lat, longitude: item.lon}}>
                  <Animated.View style={[styles.markerBody, opacityStyle]}>
                    <Animated.Image
                      source={imagePath.marker}
                      style={[styles.ring, scaleStyle]}
                      resizeMode={'contain'}
                    />
                    <View style={styles.marker} />
                  </Animated.View>
                </Marker>
              );
            })}
          </MapView>
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            snapToInterval={TOTAL_WIDTH}
            style={styles.scrollView}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: animation,
                    },
                  },
                },
              ],
              {useNativeDriver: true},
            )}>
            {Data.data.results?.map((item, index) => {
              return (
                <View key={index} style={styles.card}>
                  <Image
                    source={{
                      uri: item.featured_image,
                    }}
                    style={styles.cardImage}
                  />
                  <View style={styles.textContent}>
                    <Text style={styles.cardtitle}>{item.name}</Text>
                    <Text style={styles.cardAddress}>{item.address}</Text>
                  </View>
                </View>
              );
            })}
          </Animated.ScrollView>
        </View>
      )}
    </>
  );
};

export default Home;
