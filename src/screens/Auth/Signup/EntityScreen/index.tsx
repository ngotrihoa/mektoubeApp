import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {IconButton} from 'react-native-paper';
import Text from '../../../../common/components/MyAppText';
import RadioItem from '../../../../common/components/RadioItem';
import LinearGradient from 'react-native-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import classes from './styles';

const EntityScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp>();
  return (
    <LinearGradient colors={['#FF59F4', '#FF5978']} style={classes.background}>
      <View style={classes.header}>
        <View style={classes.headerLeft}>
          <TouchableOpacity>
            <Entypo name="chevron-left" color="#fff" size={22} />
          </TouchableOpacity>
        </View>
        <View style={classes.headerTitle}>
          <View style={classes.boxIcon}>
            <MaterialIcon name="gender-male-female" color="#fff" size={28} />
          </View>
        </View>
        <View style={classes.headerRight} />
      </View>

      <View style={classes.content}>
        <Text style={classes.textContent}>Vous êtes : </Text>
        <View style={classes.list}>
          <View style={classes.listItem}>
            <Text style={classes.label}>Un homme</Text>
            <RadioItem />
          </View>
          <View style={classes.listItem}>
            <Text style={classes.label}>Une femme</Text>
            <RadioItem />
          </View>
        </View>
      </View>

      <View style={classes.bottom}>
        <View style={classes.boxIconButton}>
          <MaterialIcon name="check" color="#fff" size={24} />
        </View>
      </View>
    </LinearGradient>
  );
};

export default EntityScreen;
