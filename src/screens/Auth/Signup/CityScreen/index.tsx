import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import RadioItem from '../../../../common/components/RadioItem';
import {screenNavigation} from '../../../../common/const';
import {
  getCityByGeolocation,
  getCityByRegion,
  getCityByZipcode,
  setSelectedCityStore,
} from '../../../../redux/actions/signupActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {
  selectCitiesStore,
  selectCitySelected,
  selectCountrySelected,
  selectRegionSelected,
} from '../../../../redux/selector/signupSelector';
import {selectIsLoadingGlobal} from '../../../../redux/selector/uiSelector';
import classes from './styles';

const CityScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const dispatch = useDispatch();
  const citiesStore = useSelector(selectCitiesStore);
  const selectedCityStore = useSelector(selectCitySelected);
  const selectedRegionStore = useSelector(selectRegionSelected);
  const selectedCountryStore = useSelector(selectCountrySelected);
  const isLoadingGetCities = useSelector(selectIsLoadingGlobal);

  const [cities, setCities] = useState(citiesStore || []);
  const [selectedCity, setSelectedCity] = useState(null);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={classes.listItem}
      onPress={() => setSelectedCity(item)}>
      <Text style={classes.label}>{item.name}</Text>
      <RadioItem checked={selectedCity?.id === item.id} />
    </TouchableOpacity>
  );

  const handlePressCity = () => {
    if (!selectedCity || Object.keys(selectedCity).length < 1) {
      dispatch(setSnackbar({type: 'error', message: 'Le champ est vide'}));
    } else {
      dispatch(setSelectedCityStore(selectedCity));
      navigation.navigate(screenNavigation.SIGNUP);
    }
  };

  useEffect(() => {
    if (params?.from === screenNavigation.REGION) {
      dispatch(
        getCityByRegion({
          country: selectedCountryStore,
          region: selectedRegionStore,
        }),
      );
    } else if (params?.from === screenNavigation.LOCATION) {
      dispatch(
        getCityByGeolocation({
          params: {
            latitude: params.latitude,
            longitude: params.longitude,
          },
        }),
      );
    } else if (params?.from === screenNavigation.ZIPCODE) {
      dispatch(
        getCityByZipcode({
          country: selectedCountryStore,
          zipcode: params.zipcode,
        }),
      );
    }
    setCities(citiesStore);
  }, [params?.from]);

  useEffect(() => {
    if (!citiesStore) return;
    setCities(citiesStore);
  }, [citiesStore]);

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

      <View style={[classes.content, {paddingHorizontal: 0}]}>
        <View style={[classes.boxTitle, {paddingHorizontal: 20}]}>
          <Text style={classes.titleContent}>Quelle est votre ville ?</Text>
        </View>
        {cities?.length < 1 && !isLoadingGetCities ? (
          <Text style={{textAlign: 'center', fontWeight: '700'}}>
            No cities found!
          </Text>
        ) : (
          <FlatList
            data={cities}
            keyExtractor={item => item.id}
            renderItem={renderItem}
            style={[classes.list, {paddingHorizontal: 20}]}
          />
        )}
      </View>

      <View style={classes.bottom}>
        <TouchableOpacity
          style={classes.boxIconButton}
          onPress={handlePressCity}>
          <MaterialCommunityIcons name="check" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CityScreen;
