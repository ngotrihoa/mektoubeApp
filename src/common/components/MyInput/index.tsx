import React from 'react';
import {StyleProp} from 'react-native';
import {TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface MyInputProps {
  style?: StyleProp;
  rest: TextInputProps;
}

const MyInput: React.FC<MyInputProps> = ({style, children, ...rest}) => {
  return (
    <TextInput
      {...rest}
      style={[{fontSize: 17}, style]}
      theme={{
        colors: {
          text: '#fff',
          primary: '#fff',
          background: 'transparent',
          placeholder: '#fff',
        },
        fonts: {
          medium: {
            fontFamily: 'Avenir Next Condensed Bold',
            fontWeight: '700',
          },
        },
      }}
    />
  );
};

export default MyInput;
