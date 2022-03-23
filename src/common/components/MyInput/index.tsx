import React, {ReactNode} from 'react';
import {StyleProp, Text, View} from 'react-native';
import {IconButton, TextInput} from 'react-native-paper';
import {TextInputProps} from 'react-native-paper/lib/typescript/components/TextInput/TextInput';

interface MyInputProps {
  style?: StyleProp;
  rest?: TextInputProps;
  right?: ReactNode;
  left?: ReactNode;
  label?: any;
}

const MyInput: React.FC<MyInputProps> = ({
  style,
  left,
  right,
  label,
  children,
  ...rest
}) => {
  return (
    <TextInput
      {...rest}
      render={inputProps => (
        <View style={{flexDirection: 'row'}}>
          {left && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {left}
            </View>
          )}
          <TextInput
            label={label}
            {...inputProps}
            autoCapitalize="none"
            style={[{flex: 1}, style]}
            theme={{
              colors: {
                text: '#fff',
                primary: '#fff',
                background: 'transparent',
                placeholder: '#fff',
              },
              fonts: {
                regular: {
                  fontFamily: 'Avenir Next Condensed Bold',
                },
              },
            }}
          />
          {right && (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              {right}
            </View>
          )}
        </View>
      )}
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
