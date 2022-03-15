import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import RadioItem from '../../../../common/components/RadioItem';
import {screenNavigation} from '../../../../common/const';
import {setEntity as setEntityStore} from '../../../../redux/actions/signupActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {selectEntityStore} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const EntityScreen = () => {
  const entityStore = useSelector(selectEntityStore);
  const [entity, setEntity] = useState(entityStore || '');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handlePressEntity = () => {
    if (entity === 'Male' || entity === 'Female') {
      dispatch(setEntityStore(entity));
      navigation.navigate(screenNavigation.BIRTHDAY);
    } else {
      dispatch(setSnackbar({type: 'error', message: 'Le champ est vide'}));
    }
  };

  return (
    <LinearGradient colors={['#FF59F4', '#FF5978']} style={classes.background}>
      <HeaderSignup
        onGoBack={() => navigation.goBack()}
        HeaderTitle={() => (
          <View style={classes.boxIcon}>
            <MaterialCommunityIcons
              name="gender-male-female"
              color="#fff"
              size={28}
            />
          </View>
        )}
      />

      <View style={classes.content}>
        <View style={classes.boxTitle}>
          <Text style={classes.titleContent}>Vous êtes : </Text>
        </View>
        <View style={classes.list}>
          <TouchableOpacity
            style={classes.listItem}
            onPress={() => setEntity('Male')}>
            <Text style={classes.label}>Un homme</Text>
            <RadioItem checked={entity === 'Male'} />
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.listItem}
            onPress={() => setEntity('Female')}>
            <Text style={classes.label}>Une femme</Text>
            <RadioItem checked={entity === 'Female'} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={classes.bottom}>
        <TouchableOpacity
          style={classes.boxIconButton}
          onPress={handlePressEntity}>
          <MaterialCommunityIcons name="check" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default EntityScreen;
