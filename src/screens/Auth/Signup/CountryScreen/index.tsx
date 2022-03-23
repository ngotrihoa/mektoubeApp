import {useNavigation} from '@react-navigation/native';
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
  getCountryAsync,
  getRegionByCountry,
  setSelectedCountryStore,
} from '../../../../redux/actions/signupActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {
  selectCountriesStore,
  selectCountrySelected,
} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const CountryScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const contriesStore = useSelector(selectCountriesStore);
  const selectedCountryStore = useSelector(selectCountrySelected);

  const [contries, setContries] = useState(contriesStore || []);
  const [selectedCountry, setSelectedCountry] = useState(selectedCountryStore);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={classes.listItem}
      onPress={() => setSelectedCountry(item)}>
      <Text style={classes.label}>{item.name}</Text>
      <RadioItem checked={selectedCountry?.id === item.id} />
    </TouchableOpacity>
  );

  const handlePressCountry = () => {
    if (!selectedCountry || Object.keys(selectedCountry).length < 1) {
      dispatch(setSnackbar({type: 'error', message: 'Le champ est vide'}));
    } else {
      dispatch(setSelectedCountryStore(selectedCountry));
      if (selectedCountry.zipFormat && selectedCountry.zipRegex) {
        navigation.navigate(screenNavigation.ZIPCODE);
      } else {
        navigation.navigate(screenNavigation.REGION);
      }
    }
  };

  useEffect(() => {
    if (!contriesStore || contriesStore?.length < 1) {
      dispatch(getCountryAsync());
    }
    setContries(contriesStore);
  }, [contriesStore]);

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
          <Text style={classes.titleContent}>Quel est votre pays ?</Text>
        </View>
        <FlatList
          data={contries}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          style={[classes.list, {paddingHorizontal: 20}]}
        />
      </View>

      <View style={classes.bottom}>
        <TouchableOpacity
          style={classes.boxIconButton}
          onPress={handlePressCountry}>
          <MaterialCommunityIcons name="check" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default CountryScreen;
