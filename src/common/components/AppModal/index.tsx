import React, {useState} from 'react';
import {ActivityIndicator, Modal, Portal} from 'react-native-paper';
import Text from '../MyAppText';

interface AppModalProps {
  containerStyle?: any;
  visible: boolean;
  onDismiss?: () => void;
}

const AppModal: React.FC<AppModalProps> = ({
  children,
  containerStyle,
  visible,
  onDismiss = () => {},
}) => {
  const defaultContainerStyle = {backgroundColor: 'white', padding: 20};

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={
          containerStyle ? containerStyle : defaultContainerStyle
        }>
        {children}
      </Modal>
    </Portal>
  );
};

export default AppModal;
