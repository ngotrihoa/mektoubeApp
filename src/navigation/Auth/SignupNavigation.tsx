import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {screenNavigation} from '../../common/const';
import {BirthdayScreen, EntityScreen, SignupScreen} from '../../screens';
import OriginScreen from '../../screens/Auth/Signup/OriginScreen';

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
      <Stack.Screen name={screenNavigation.COUNTRY} component={EntityScreen} />
      <Stack.Screen name={screenNavigation.SIGNUP} component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default SignupNavigation;
