import React, {useEffect, useRef, useState} from 'react';
import {Text, View, Animated} from 'react-native';
import {Portal, IconButton} from 'react-native-paper';
import {Dimensions} from 'react-native';
import classes from './styles';

interface BottomSheetProps {
  show: boolean;
  header: string;
  onClose: () => void;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  show,
  header,
  children,
  onClose,
}) => {
  const [open, setOpen] = useState(show);

  const deviceHeight = Dimensions.get('window').height;
  const bottomSheetHeight = deviceHeight * 0.8;

  const bottom = useRef(new Animated.Value(-bottomSheetHeight)).current;

  useEffect(() => {
    if (open) {
      Animated.timing(bottom, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    } else {
      Animated.timing(bottom, {
        toValue: -bottomSheetHeight,
        duration: 300,
        useNativeDriver: false,
      }).start(() => {
        onClose();
      });
    }
  }, [open]);

  return (
    <Portal>
      <Animated.View
        style={[classes.root, {height: bottomSheetHeight, bottom: bottom}]}>
        <View style={classes.header}>
          <Text style={classes.headerText}>{header}</Text>
          <IconButton
            style={classes.close}
            icon="close"
            onPress={() => setOpen(false)}
          />
        </View>
        <View>{children}</View>
      </Animated.View>
    </Portal>
  );
};

export default BottomSheet;
