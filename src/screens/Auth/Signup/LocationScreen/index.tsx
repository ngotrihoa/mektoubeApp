import Geolocation from '@react-native-community/geolocation';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import {screenNavigation} from '../../../../common/const';
import {
  getCityByGeolocation,
  getCountryAsync,
} from '../../../../redux/actions/signupActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import classes from './styles';

const LocationScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const handlePressGetLocation = () => {
    Geolocation.getCurrentPosition(
      info => {
        navigation.navigate(screenNavigation.CITY, {
          from: screenNavigation.LOCATION,
          latitude: info.coords.latitude,
          longitude: info.coords.longitude,
        });
      },
      error => {
        dispatch(
          setSnackbar({type: 'error', message: 'Géolocalisation indisponible'}),
        );
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
      },
    );
  };

  const handlePressGeolocation = () => {
    navigation.navigate(screenNavigation.COUNTRY);
  };

  return (
    <LinearGradient colors={['#FF59F4', '#FF5978']} style={classes.background}>
      <HeaderSignup
        onGoBack={() => navigation.goBack()}
        HeaderTitle={() => (
          <View style={classes.boxIcon}>
            <Ionicons name="location-outline" color="#fff" size={20} />
          </View>
        )}
      />

      <View style={classes.content}>
        <View style={classes.boxTitle}>
          <Text style={classes.titleContent}>Où habitez-vous ?</Text>
        </View>

        <View style={classes.choosenContainer}>
          <TouchableOpacity
            style={classes.choosenMain}
            onPress={handlePressGeolocation}>
            <Text style={classes.choosenText}>Ma localisation</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.choosenGeo}
            onPress={handlePressGetLocation}>
            <Ionicons name="location-outline" color="#fff" size={20} />
            <Text>Me géolocaliser ?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={classes.bottom}>
        <TouchableOpacity
          style={classes.boxIconButton}
          onPress={handlePressGeolocation}>
          <MaterialCommunityIcons name="check" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default LocationScreen;
