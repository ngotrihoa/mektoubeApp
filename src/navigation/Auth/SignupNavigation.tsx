import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screenNavigation} from '../../common/const';
import {
  BirthdayScreen,
  CityScreen,
  CountryScreen,
  EntityScreen,
  LocationScreen,
  OriginScreen,
  RegionScreen,
  SignupScreen,
} from '../../screens';

const Stack = createNativeStackNavigator();

const SignupNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={screenNavigation.ENTITY}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNavigation.ENTITY} component={EntityScreen} />
      <Stack.Screen
        name={screenNavigation.BIRTHDAY}
        component={BirthdayScreen}
      />
      <Stack.Screen name={screenNavigation.ORIGIN} component={OriginScreen} />
      <Stack.Screen name={screenNavigation.COUNTRY} component={CountryScreen} />
      <Stack.Screen name={screenNavigation.REGION} component={RegionScreen} />
      <Stack.Screen name={screenNavigation.SIGNUP} component={SignupScreen} />
      <Stack.Screen
        name={screenNavigation.LOCATION}
        component={LocationScreen}
      />
      <Stack.Screen name={screenNavigation.CITY} component={CityScreen} />
    </Stack.Navigator>
  );
};

export default SignupNavigation;
