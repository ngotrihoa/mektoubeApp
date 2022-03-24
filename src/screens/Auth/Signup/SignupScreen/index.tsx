import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import CheckboxItem from '../../../../common/components/CheckboxItem';
import HeaderSignup from '../../../../common/components/HeaderSignup';
import Text from '../../../../common/components/MyAppText';
import MyInput from '../../../../common/components/MyInput';
import {rules, screenNavigation} from '../../../../common/const';
import {strongPassword} from '../../../../common/untils';
import {
  resetAuthErrorAction,
  signupActions,
} from '../../../../redux/actions/authActions';
import {setSnackbar} from '../../../../redux/actions/uiAction';
import {
  selectAuthError,
  selectIsLoadingAuth,
} from '../../../../redux/selector/authSelector';
import {selectDataSignup} from '../../../../redux/selector/signupSelector';
import classes from './styles';

const SignupScreen = () => {
  const navigation = useNavigation();
  const [isShowPass, setIsShowPass] = useState(false);
  const [strong, setStrong] = useState({numStrong: 0, status: 'Failble'});
  const [firstCheckbox, setFirstCheckbox] = useState(false);
  const [secondCheckbox, setSecondCheckbox] = useState(false);
  const isSignup = useSelector(selectIsLoadingAuth);
  const dispatch = useDispatch();
  const dataSignupStore = useSelector(selectDataSignup);
  console.log('🚀 ~ dataSignupStore', dataSignupStore);
  const authError = useSelector(selectAuthError);

  const {control, handleSubmit} = useForm({
    mode: 'onChange',
    defaultValues: {
      email: '',
      userName: '',
      password: '',
    },
  });
  const handlePressSignup = handleSubmit(formValues => {
    if (!firstCheckbox || !secondCheckbox) {
      dispatch(
        setSnackbar({type: 'error', message: 'Vous devez accepter les CGU'}),
      );
    } else {
      const data = {
        firstname: formValues.userName,
        email: formValues.email,
        password: formValues.password,
        ...dataSignupStore,
      };

      dispatch(signupActions(data));
    }
  });

  useEffect(() => {
    if (!authError || !authError.message) return;
    dispatch(setSnackbar({type: 'error', message: authError.message}));
    return () => {
      dispatch(resetAuthErrorAction({}));
    };
  }, [authError]);

  return (
    <LinearGradient colors={['#FF59F4', '#FF5978']} style={classes.background}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{flex: 1}}>
        <View style={{flex: 1}}>
          <HeaderSignup
            onGoBack={() => navigation.goBack()}
            HeaderTitle={() => (
              <Text style={classes.headerTitle}>Inscription</Text>
            )}
            HeaderRight={() => (
              <Text
                style={classes.headerRight}
                onPress={() => {
                  navigation.navigate(screenNavigation.SIGNIN, {login: true});
                }}>
                Déjà un compte ?
              </Text>
            )}
            style={{alignItems: 'center'}}
          />

          <View style={classes.content}>
            <View style={classes.listInput}>
              <View style={classes.inputItem}>
                <Controller
                  name="email"
                  control={control}
                  render={({field: {name, onChange, value}, fieldState}) => (
                    <>
                      <MyInput
                        onChangeText={e => onChange(e)}
                        value={value}
                        style={{fontSize: 17}}
                        label="Email"
                        underlineColor="#fff"
                        activeUnderlineColor="#fff"
                      />
                      {fieldState.error && (
                        <View style={classes.inputError}>
                          <Text style={classes.errorMessage}>
                            {fieldState.error?.message}
                          </Text>
                        </View>
                      )}
                    </>
                  )}
                  rules={rules.ruleEmail}
                />
              </View>
              <View style={classes.inputItem}>
                <Controller
                  name="userName"
                  control={control}
                  render={({field: {name, onChange, value}, fieldState}) => (
                    <>
                      <MyInput
                        onChangeText={e => onChange(e)}
                        value={value}
                        style={{fontSize: 17}}
                        label="Prénom"
                        underlineColor="#fff"
                        activeUnderlineColor="#fff"
                      />
                      {fieldState.error && (
                        <View style={classes.inputError}>
                          <Text style={classes.errorMessage}>
                            {fieldState.error?.message}
                          </Text>
                        </View>
                      )}
                    </>
                  )}
                  rules={rules.ruleUserName}
                />
              </View>
              <View style={classes.inputItem}>
                <Controller
                  name="password"
                  control={control}
                  render={({field: {name, onChange, value}, fieldState}) => (
                    <>
                      <MyInput
                        onChangeText={e => {
                          const strongPass = strongPassword(e, 8);
                          setStrong(strongPass);
                          onChange(e);
                        }}
                        value={value}
                        secureTextEntry={!isShowPass}
                        style={{fontSize: 17}}
                        label={
                          <Text
                            style={{
                              fontSize: 17,
                              fontFamily: 'Avenir Next Condensed Bold',
                            }}>
                            Mot de Passe
                          </Text>
                        }
                        underlineColor="#fff"
                        activeUnderlineColor="#fff"
                        right={
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                            <IconButton
                              icon={isShowPass ? 'eye-off' : 'eye'}
                              color="rgb(146, 150, 153)"
                              children
                              size={24}
                              onPress={() => setIsShowPass(prev => !prev)}
                            />
                            <View>
                              <Text>{strong.status}</Text>
                              <View
                                style={{
                                  width: 30,
                                  height: 3,
                                  backgroundColor: 'hsla(0,0%,100%,.5)',
                                  alignSelf: 'flex-end',
                                }}>
                                <View
                                  style={{
                                    height: '100%',
                                    width: `${(strong.numStrong * 100) / 12}%`,
                                    backgroundColor:
                                      strong.status === 'Fort'
                                        ? 'green'
                                        : strong.status === 'Mayen'
                                        ? 'orange'
                                        : 'red',
                                  }}
                                />
                              </View>
                            </View>
                          </View>
                        }
                      />
                      {fieldState.error && (
                        <View style={classes.inputError}>
                          <Text style={classes.errorMessage}>
                            {fieldState.error?.message}
                          </Text>
                        </View>
                      )}
                    </>
                  )}
                  keyboardType="number-pad"
                  rules={rules.rulePassword}
                />
              </View>
            </View>
            <View style={classes.listCheckbox}>
              <TouchableWithoutFeedback
                onPress={() => setFirstCheckbox(prev => !prev)}>
                <View style={classes.checkboxItem}>
                  <CheckboxItem
                    checked={firstCheckbox}
                    size={35}
                    style={{marginRight: 12}}
                  />
                  <View style={{flex: 1}}>
                    <Text style={classes.textLabel}>
                      Je certifie être majeur(e) et j’accepte les{' '}
                      <Text
                        style={[
                          classes.textLabel,
                          {marginLeft: 5, textDecorationLine: 'underline'},
                        ]}>
                        Conditions générales d’utilisations
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => setSecondCheckbox(prev => !prev)}>
                <View style={classes.checkboxItem}>
                  <CheckboxItem
                    checked={secondCheckbox}
                    size={35}
                    style={{marginRight: 12}}
                  />
                  <View style={{flex: 1}}>
                    <Text style={classes.textLabel}>
                      J'accepte que mes données renseignées, y compris celles
                      facultatives relatives à mon origine, soient traitées par
                      Mektoube et communiquées à ses prestataires et aux autres
                      membres situés dans et hors l’UE afin de favoriser des
                      rencontres et assurer la gestion de ma relation
                      commerciale et ce conformément à la
                      <Text
                        style={[
                          classes.textLabel,
                          {
                            paddingHorizontal: 5,
                            textDecorationLine: 'underline',
                          },
                        ]}>
                        charte privée
                      </Text>
                    </Text>
                  </View>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
          <View style={classes.bottom}>
            <TouchableOpacity
              disabled={isSignup ? true : false}
              style={[
                classes.btn,
                isSignup ? {backgroundColor: 'transparent'} : null,
              ]}
              onPress={handlePressSignup}>
              {isSignup ? (
                <ActivityIndicator animating={true} color="#fff" size={40} />
              ) : (
                <View style={{flexDirection: 'row'}}>
                  <Ionicons name="checkmark-sharp" size={22} color="#fff" />
                  <Text style={classes.textBtn}>Créer mon compte</Text>
                </View>
              )}
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </LinearGradient>
  );
};

export default SignupScreen;
