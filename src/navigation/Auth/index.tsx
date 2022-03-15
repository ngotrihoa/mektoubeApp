import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SigninScreen} from '../../screens';
import SignupNavigation from './SignupNavigation';
import HomeScreen from '../../screens/Home';
import {selectIsLogin} from '../../redux/selector/authSelector';
import {useSelector} from 'react-redux';

const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  const isLogin = useSelector(selectIsLogin);

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isLogin ? (
        <Stack.Screen name="Home" component={HomeScreen} />
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
