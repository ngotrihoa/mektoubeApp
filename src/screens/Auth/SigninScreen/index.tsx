import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, ImageBackground, TouchableOpacity, View} from 'react-native';
import BottomSheet from '../../../common/components/BottomSheet';
import Text from '../../../common/components/MyAppText';
import {BACKGROUND_INTRO, LOGO, screenNavigation} from '../../../common/const';
import SigninForm from './SigninForm';
import classes from './styles';

const SigninScreen = () => {
  const navigation = useNavigation();
  const {params} = useRoute();
  const [isShowSignin, setIsShowSignin] = useState<boolean>(
    params?.login || false,
  );

  const handlePressSignin = () => {
    setIsShowSignin(prev => !prev);
  };

  const handlePressSignup = () => {
    setIsShowSignin(false);
    navigation.navigate(screenNavigation.SIGNUP_FLOW);
  };

  useEffect(() => {
    if (!params || !params?.login) return;
    setIsShowSignin(true);
  }, [params]);

  return (
    <ImageBackground
      source={BACKGROUND_INTRO}
      resizeMode="cover"
      style={classes.background}>
      <View style={classes.container}>
        <View style={classes.content}>
          <Image source={LOGO} style={classes.logo} resizeMode="contain" />
          <Text style={classes.subLogo}>
            L'application numero 1 de la rencontre Musulmane et Maghrebine
          </Text>
        </View>
        <View style={classes.groupLink}>
          <TouchableOpacity
            style={classes.linkLeft}
            onPress={handlePressSignin}>
            <Text style={classes.linkText}>se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={classes.linkBtn} onPress={handlePressSignup}>
            <View style={classes.btnText}>
              <Text style={{fontWeight: '600'}}>INSCRIPTION GRATUITE</Text>
              <Text style={{fontWeight: '600'}}>en 1min</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {isShowSignin && (
        <BottomSheet
          show={isShowSignin}
          header="Connexion"
          onClose={() => setIsShowSignin(false)}>
          <SigninForm onSignup={handlePressSignup} />
        </BottomSheet>
      )}
    </ImageBackground>
  );
};

export default SigninScreen;
