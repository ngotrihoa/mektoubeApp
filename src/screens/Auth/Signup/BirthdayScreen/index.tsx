import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import {screenNavigation} from '../../../../common/const';
import useBirthday from '../../../../hooks/useBirthday';
import {
  getOriginAsync,
  setBirthday,
} from '../../../../redux/actions/signupActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {selectOriginStore} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const BirthdayScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const originStore = useSelector(selectOriginStore);

  const {
    day,
    month,
    year,
    monthRef,
    yearRef,
    handleKeyPressDay,
    handleKeyPressMonth,
    handleKeyPressYear,
    checkDateValid,
  } = useBirthday();

  const handlePressBirthday = () => {
    if (day.trim() === '' || month.trim() === '' || year.trim() === '') {
      dispatch(
        setSnackbar({
          type: 'error',
          message: 'Le champ est vide',
        }),
      );
    } else if (!checkDateValid()) {
      dispatch(
        setSnackbar({
          type: 'error',
          message: 'Vous devez mettre une date valide',
        }),
      );
    } else {
      dispatch(setBirthday({day, month, year}));
      if (!originStore || originStore.length < 1) {
        dispatch(getOriginAsync());
      }
      navigation.navigate(screenNavigation.ORIGIN);
    }
  };

  return (
    <LinearGradient colors={['#FF59F4', '#FF5978']} style={{flex: 1}}>
      <HeaderSignup
        onGoBack={() => navigation.goBack()}
        HeaderTitle={() => (
          <View style={classes.boxIcon}>
            <FontAwesome5 name="birthday-cake" color="#fff" size={19} />
          </View>
        )}
      />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <View style={classes.content}>
          <View style={classes.boxTitle}>
            <Text style={classes.titleContent}>
              Quelle est votre date de naissance ?
            </Text>
          </View>
          <View style={classes.inputGroup}>
            <TextInput
              keyboardType="numeric"
              placeholder="DD"
              placeholderTextColor="#ffffff70"
              onChangeText={handleKeyPressDay}
              value={day}
              maxLength={2}
              style={classes.input}
            />
            <Text style={{color: '#fff'}}>/</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="MM"
              placeholderTextColor="#ffffff70"
              style={classes.input}
              ref={monthRef}
              value={month}
              maxLength={2}
              onChangeText={handleKeyPressMonth}
            />
            <Text style={{color: '#fff'}}>/</Text>
            <TextInput
              keyboardType="numeric"
              placeholder="YY"
              placeholderTextColor="#ffffff70"
              ref={yearRef}
              value={year}
              style={classes.input}
              maxLength={4}
              onChangeText={handleKeyPressYear}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>

      <View style={classes.bottom}>
        <TouchableOpacity
          style={classes.boxIconButton}
          onPress={handlePressBirthday}>
          <MaterialCommunityIcons name="check" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default BirthdayScreen;
