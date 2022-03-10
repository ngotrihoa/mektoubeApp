import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SigninScreen} from '../../screens';
import SignupNavigation from './SignupNavigation';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Signin"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="SignupFlow" component={SignupNavigation} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
