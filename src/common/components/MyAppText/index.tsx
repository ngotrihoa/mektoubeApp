import React from 'react';
import {StyleProp, Text} from 'react-native';
import classes from './styles';

interface MyAppTextProps {
  style?: StyleProp;
  children: any;
}

const MyAppText: React.FC<MyAppTextProps> = ({children, style, ...rest}) => {
  return (
    <Text style={[classes.text, style]} {...rest}>
      {children}
    </Text>
  );
};

export default MyAppText;
