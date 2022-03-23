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
  getRegionByCountry,
  setSelectedRegionStore,
} from '../../../../redux/actions/signupActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {
  selectCountrySelected,
  selectRegionSelected,
  selectRegionsStore,
} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const RegionScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const regionsStore = useSelector(selectRegionsStore);
  const selectedRegionsStore = useSelector(selectRegionSelected);
  const selectedCountryStore = useSelector(selectCountrySelected);

  const [regions, setRegions] = useState(regionsStore || []);
  const [selectedRegion, setSelectedRegion] = useState(selectedRegionsStore);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={classes.listItem}
      onPress={() => setSelectedRegion(item)}>
      <Text style={classes.label}>{item.name}</Text>
      <RadioItem checked={selectedRegion?.id === item.id} />
    </TouchableOpacity>
  );

  const handlePressCountry = () => {
    if (!selectedRegion || Object.keys(selectedRegion).length < 1) {
      dispatch(setSnackbar({type: 'error', message: 'Le champ est vide'}));
    } else {
      dispatch(setSelectedRegionStore(selectedRegion));
      navigation.navigate(screenNavigation.CITY, {
        from: screenNavigation.REGION,
      });
    }
  };

  useEffect(() => {
    if (!regionsStore || regionsStore?.length < 1) {
      dispatch(getRegionByCountry({idCountry: selectedCountryStore.id}));
    }
    setRegions(regionsStore);
  }, [regionsStore]);

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
          <Text style={classes.titleContent}>Quelle est votre région ?</Text>
        </View>
        <FlatList
          data={regions}
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

export default RegionScreen;
