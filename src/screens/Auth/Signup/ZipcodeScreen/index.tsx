import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import MyInput from '../../../../common/components/MyInput';
import {screenNavigation} from '../../../../common/const';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {selectCountrySelected} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const ZipcodeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedCountry = useSelector(selectCountrySelected);
  const [zipcode, setZipcode] = useState('');
  const regex = new RegExp(selectedCountry.zipRegex);
  const handlePressZipcode = () => {
    if (!zipcode || zipcode.trim() === '') {
      dispatch(setSnackbar({type: 'error', message: 'Le champ est vide'}));
    } else if (!zipcode.match(regex)) {
      dispatch(setSnackbar({type: 'error', message: 'Invalid zipcode'}));
    } else {
      navigation.navigate(screenNavigation.SIGNUP);
    }
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

      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <View style={classes.content}>
          <View style={classes.boxTitle}>
            <Text style={classes.titleContent}>
              Quel est votre code postal ?
            </Text>
          </View>
          <MyInput
            value={zipcode}
            style={{marginHorizontal: 35, fontSize: 17}}
            onChangeText={value => setZipcode(value)}
            label="Code postal ?"
            keyboardType="number-pad"
            underlineColor="#fff"
            activeUnderlineColor="#fff"
          />
        </View>
      </TouchableWithoutFeedback>

      <View style={classes.bottom}>
        <TouchableOpacity
          style={classes.boxIconButton}
          onPress={handlePressZipcode}>
          <MaterialCommunityIcons name="check" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default ZipcodeScreen;
