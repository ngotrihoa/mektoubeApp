import React from 'react';
import {StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface CheckboxItemProps {
  colorUnchecked?: string;
  colorChecked?: string;
  checked?: boolean;
  size?: number;
  style?: any;
}

const CheckboxItem: React.FC<CheckboxItemProps> = ({
  checked,
  colorUnchecked = '#fff',
  colorChecked = '#fff',
  size = 22,
  style,
}) => {
  return (
    <View
      style={[
        styles.radio,
        {
          borderColor: checked ? colorChecked : colorUnchecked,
          width: size,
          height: size,
        },
        style,
      ]}>
      {checked && (
        <Ionicons name="checkmark-sharp" size={size - 6} color="#fff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  active: {
    width: 12,
    height: 12,
    borderRadius: 10000,
    transform: [{translateY: 3}],
  },
});

export default CheckboxItem;
