import React from 'react';
import {StyleSheet, View} from 'react-native';

interface RadioItemProps {
  colorUnchecked?: string;
  colorChecked?: string;
  checked?: boolean;
}

const RadioItem: React.FC<RadioItemProps> = ({
  checked,
  colorUnchecked = '#fff',
  colorChecked = '#fff',
}) => {
  return (
    <View
      style={[
        styles.radio,
        {borderColor: checked ? colorChecked : colorUnchecked},
      ]}>
      {checked && (
        <View style={[styles.active, {backgroundColor: colorChecked}]} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  radio: {
    width: 22,
    height: 22,
    borderRadius: 1000,
    borderWidth: 2,
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

export default RadioItem;
