import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import classes from './styles';

const HeaderSignup = ({onGoBack, HeaderTitle, HeaderRight}: any) => {
  return (
    <View style={classes.header}>
      <View style={classes.headerLeft}>
        <TouchableOpacity onPress={onGoBack}>
          <Entypo name="chevron-left" color="#fff" size={22} />
        </TouchableOpacity>
      </View>
      <View style={classes.headerTitle}>{HeaderTitle && <HeaderTitle />}</View>
      <View style={classes.headerRight}>{HeaderRight && <HeaderRight />}</View>
    </View>
  );
};

export default HeaderSignup;
