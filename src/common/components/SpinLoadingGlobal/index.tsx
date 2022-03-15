import React, {useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectIsLoadingGlobal} from '../../../redux/selector/uiSelector';
import AppModal from '../AppModal';

const SpinLoadingGlobal = () => {
  const visiable = useSelector(selectIsLoadingGlobal);

  return (
    <AppModal
      visible={visiable}
      containerStyle={{backgroundColor: 'transparent', flex: 1}}>
      <ActivityIndicator animating={true} color="white" size="large" />
    </AppModal>
  );
};

export default SpinLoadingGlobal;
