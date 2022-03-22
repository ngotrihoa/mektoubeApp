import {
  View,
  Text,
  Animated,
  StyleSheet,
  Easing,
  StyleProp,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import classes from './styles';
import LinearGradient from 'react-native-linear-gradient';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  style?: StyleProp;
}

const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '100%',
  style,
}) => {
  const translateX = useRef(new Animated.Value(+width * -1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: +width,
        duration: 1000,
        easing: Easing.linear.inOut,
        useNativeDriver: true,
      }),
    ).start();
  }, [width]);

  return (
    <View
      style={StyleSheet.flatten([
        {
          width,
          height,
          backgroundColor: 'rgba(0,0,0,0.12)',
          overflow: 'hidden',
        },
        style,
      ])}>
      <Animated.View
        style={{width: '100%', height: '100%', transform: [{translateX}]}}>
        <LinearGradient
          style={{width: '100%', height: '100%'}}
          colors={['transparent', 'rgba(0,0,0,0.05)', 'transparent']}
          start={{x: 1, y: 1}}
        />
      </Animated.View>
    </View>
  );
};

export default Skeleton;
