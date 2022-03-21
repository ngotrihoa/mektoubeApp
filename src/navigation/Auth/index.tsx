import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useSelector} from 'react-redux';
import {selectIsLogin} from '../../redux/selector/authSelector';
import {SigninScreen} from '../../screens';
import BottomTabHome from '../Home';
import SignupNavigation from './SignupNavigation';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      {isLogin ? (
        <Stack.Screen name="Home" component={BottomTabHome} />
      ) : (
        <>
          <Stack.Screen name="Signin" component={SigninScreen} />
          <Stack.Screen name="SignupFlow" component={SignupNavigation} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default AuthNavigation;
