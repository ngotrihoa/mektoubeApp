import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, Image, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import {screenNavigation} from '../../../../common/const';
import {
  getOriginAsync,
  setOrigin,
} from '../../../../redux/actions/signupActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {selectOriginStore} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const SelectedOrigin = ({origins, onSelect}) => {
  const selectedOrigin = origins?.filter(item => item.selected) || [];

  return (
    <View
      style={[
        selectedOrigin && selectedOrigin.length > 0 && classes.listSelected,
        {paddingHorizontal: 24},
      ]}>
      {selectedOrigin &&
        selectedOrigin.length > 0 &&
        selectedOrigin.map(item => (
          <View key={item.id} style={[classes.listItemSelected]}>
            <Image
              source={{uri: item.flag_url}}
              style={{width: 24, height: 24}}
            />

            <Text style={classes.text}>{item.default_name}</Text>
            <TouchableOpacity onPress={() => onSelect(item)}>
              <EvilIcons
                style={{marginLeft: 10}}
                name="close"
                size={18}
                color="black"
              />
            </TouchableOpacity>
          </View>
        ))}
    </View>
  );
};

const OriginScreen = () => {
  const originStore = useSelector(selectOriginStore);
  const [origins, setOrigins] = useState(originStore || []);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleSelect = item => {
    const selected = origins?.filter(el => el.selected);
    if (item.selected === false && selected && selected.length === 4) return;

    setOrigins(prevOrigins => {
      return prevOrigins.map(origin => {
        if (origin.id === item.id) {
          origin.selected = !origin.selected;
        }

        return origin;
      });
    });
  };

  const renderItem = useCallback(
    ({item}) => (
      <TouchableOpacity
        style={[classes.listItem, item.selected && classes.itemSelected]}
        onPress={() => handleSelect(item)}>
        <Image source={{uri: item.flag_url}} style={{width: 24, height: 24}} />
        <Text style={classes.text}>{item.default_name}</Text>
        {item.selected && (
          <View style={{marginLeft: 'auto'}}>
            <AntDesign name="checkcircle" size={24} color="white" />
          </View>
        )}
      </TouchableOpacity>
    ),
    [],
  );

  const handlePressOrigin = () => {
    const selectedOrigins = origins?.filter(el => el.selected);
    if (!selectedOrigins || selectedOrigins.length < 1) {
      dispatch(setSnackbar({type: 'error', message: 'Le champ est vide'}));
    } else {
      dispatch(setOrigin(origins));
      navigation.navigate(screenNavigation.LOCATION);
    }
  };

  useEffect(() => {
    if (!originStore || originStore?.length < 1) {
      dispatch(getOriginAsync());
    }
    setOrigins(originStore);
  }, [originStore]);

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

      <View style={classes.content}>
        <View style={[classes.boxTitle, {paddingHorizontal: 20}]}>
          <Text style={classes.titleContent}>
            Quel est mon pays d'origine ?
          </Text>
          <Text style={classes.subTitle}>4 choix possibles</Text>
        </View>
        <SelectedOrigin origins={origins} onSelect={handleSelect} />

        {origins && origins.length > 0 && (
          <FlatList
            data={origins}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={[classes.list, {paddingHorizontal: 24}]}
          />
        )}
      </View>

      <View style={classes.bottom}>
        <TouchableOpacity
          style={classes.boxIconButton}
          onPress={handlePressOrigin}>
          <MaterialCommunityIcons name="check" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default OriginScreen;
