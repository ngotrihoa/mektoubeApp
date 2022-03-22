import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import CheckboxItem from '../../../../common/components/CheckboxItem';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import MyInput from '../../../../common/components/MyInput';
import {selectCountrySelected} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const SignupScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectedCountry = useSelector(selectCountrySelected);
  const {control} = useForm();
  const handlePressSignup = () => {};

  return (
    <LinearGradient colors={['#FF59F4', '#FF5978']} style={classes.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <View style={{flex: 1}}>
          <HeaderSignup
            onGoBack={() => navigation.goBack()}
            HeaderTitle={() => (
              <Text style={classes.headerTitle}>Inscription</Text>
            )}
            HeaderRight={() => (
              <Text style={classes.headerRight}>Déjà un compte ?</Text>
            )}
            style={{alignItems: 'center'}}
          />

          <View style={classes.content}>
            <View style={classes.listInput}>
              <View style={classes.inputItem}>
                <MyInput
                  style={{fontSize: 17}}
                  label="Email"
                  keyboardType="number-pad"
                  underlineColor="#fff"
                  activeUnderlineColor="#fff"
                />
              </View>
              <View style={classes.inputItem}>
                <MyInput
                  style={{fontSize: 17}}
                  label="Prénom"
                  keyboardType="number-pad"
                  underlineColor="#fff"
                  activeUnderlineColor="#fff"
                />
              </View>
              <View style={classes.inputItem}>
                <MyInput
                  style={{fontSize: 17}}
                  label="Mot de Passe"
                  keyboardType="number-pad"
                  underlineColor="#fff"
                  activeUnderlineColor="#fff"
                />
              </View>
            </View>
            <View>
              <CheckboxItem checked={true} size={35} />
              <CheckboxItem checked={true} size={35} />
              <CheckboxItem checked={true} size={35} />
            </View>
          </View>
          <View style={classes.bottom}>
            <TouchableOpacity
              style={classes.boxIconButton}
              onPress={handlePressSignup}>
              <MaterialCommunityIcons name="check" color="#fff" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default SignupScreen;
