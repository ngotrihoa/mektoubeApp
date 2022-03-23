import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {signoutActions} from '../../redux/actions/authActions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Tab Screen</Text>
      <Button
        mode="contained"
        onPress={() => {
          dispatch(signoutActions({}));
        }}>
        Sign out
      </Button>
    </View>
  );
};

export default HomeScreen;
