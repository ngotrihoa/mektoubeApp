import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  DiscoveryIcon,
  EntityIcon,
  MessageIcon,
  NotificationIcon,
  UserInfoIcon,
} from '../../common/components/BottomTabIcon';
import HomeScreen from '../../screens/Home';
import DiscoveryTab from '../../screens/Home/DiscoveryTab';

const BottomTab = createBottomTabNavigator();

const BottomTabHome = () => {
  const tabBarStyle = {
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,

    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    zIndex: 0,
  };

  return (
    <BottomTab.Navigator
      initialRouteName="DiscoveryTab"
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle,
      }}>
      <BottomTab.Screen
        name="DiscoveryTab"
        component={DiscoveryTab}
        options={{
          title: 'Discovery',
          tabBarIcon: ({color, focused}) => (
            <DiscoveryIcon focused={focused} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="EntityTab"
        component={HomeScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({color, focused}) => (
            <EntityIcon focused={focused} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="MessageTab"
        component={HomeScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({color, focused}) => (
            <MessageIcon focused={focused} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="NotificationTab"
        component={HomeScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({color, focused}) => (
            <NotificationIcon focused={focused} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="UserInfoTab"
        component={HomeScreen}
        options={{
          title: 'Tab Two',
          tabBarIcon: ({color, focused}) => (
            <UserInfoIcon focused={focused} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};
export default BottomTabHome;
