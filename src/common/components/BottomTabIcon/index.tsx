import React from 'react';
import {StyleSheet, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const DiscoveryIcon = ({color, focused}) => {
  return (
    <View style={[styles.iconContainer, focused ? styles.focused : null]}>
      <Feather name="search" size={21} color={color} />
    </View>
  );
};
const EntityIcon = ({color, focused}) => {
  return (
    <View style={[styles.iconContainer, focused ? styles.focused : null]}>
      <FontAwesome name="transgender" size={21} color={color} />
    </View>
  );
};
const MessageIcon = ({color, focused}) => {
  return (
    <View style={[styles.iconContainer, focused ? styles.focused : null]}>
      <AntDesign name="message1" size={21} color={color} />
    </View>
  );
};
const NotificationIcon = ({color, focused}) => {
  return (
    <View style={[styles.iconContainer, focused ? styles.focused : null]}>
      <Ionicons name="notifications-outline" size={21} color={color} />
    </View>
  );
};
const UserInfoIcon = ({color, focused}) => {
  return (
    <View style={[styles.iconContainer, focused ? styles.focused : null]}>
      <SimpleLineIcons name="user" size={21} color={color} />
    </View>
  );
};

export {DiscoveryIcon, EntityIcon, MessageIcon, UserInfoIcon, NotificationIcon};

const styles = StyleSheet.create({
  iconContainer: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  focused: {
    borderBottomColor: '#24cf5f',
    borderBottomWidth: 5,
  },
});
