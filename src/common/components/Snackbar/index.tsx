import React, {useEffect, useState} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {Snackbar} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectSnackbar} from '../../../redux/selector/uiSelector';

let initApp = true;

const MySnackbar = () => {
  const {time, type, message = ''} = useSelector(selectSnackbar);
  const [visible, setVisible] = useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const backgroundColor =
    type === 'success'
      ? '#24cf5f'
      : type === 'error'
      ? '#ff2c2c'
      : type === 'info'
      ? '#0288D1'
      : type === 'warning'
      ? '#ED6C02'
      : '#2E302E';

  useEffect(() => {
    if (!time || initApp) {
      initApp = false;
      return;
    }
    setVisible(true);
  }, [time]);

  return (
    <TouchableWithoutFeedback
      style={{minHeight: 56}}
      onPress={onDismissSnackBar}>
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{minHeight: 56, backgroundColor}}
        wrapperStyle={{
          position: 'absolute',
          zIndex: 1000,
          top: -10,
        }}
        duration={3000}>
        {message}
      </Snackbar>
    </TouchableWithoutFeedback>
  );
};

export default MySnackbar;
