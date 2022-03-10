import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

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
    <TouchableWithoutFeedback accessibilityRole="radio">
      <View
        style={[
          styles.radio,
          {borderColor: checked ? colorChecked : colorUnchecked},
        ]}>
        <View style={[styles.active, {backgroundColor: colorChecked}]} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  radio: {
    width: 22,
    height: 22,
    borderRadius: 1000,
    borderWidth: 2,
    // borderColor: '#7196B9',
    borderColor: '#24cf5f',

    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  active: {
    width: 12,
    height: 12,
    backgroundColor: '#24cf5f',
    borderRadius: 10000,
    transform: [{translateY: 3}],
  },
});

export default RadioItem;
