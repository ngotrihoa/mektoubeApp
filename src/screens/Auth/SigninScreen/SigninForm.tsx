import React, {useEffect, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {ActivityIndicator, IconButton} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import Text from '../../../common/components/MyAppText';
import RadioItem from '../../../common/components/RadioItem';
import {signinActions} from '../../../redux/actions/authActions';
import {
  selectAuthError,
  selectIsLoadingAuth,
} from '../../../redux/selector/authSelector';
import classes from './styles';
type FormValues = {
  email: string;
  password: string;
};

const SigninForm = ({onSignup}) => {
  const [typeSignin, setTypeSignin] = useState('email');
  const [isShowPass, setIsShowPass] = useState(false);
  const [formError, setFormError] = useState({});

  const isSigning = useSelector(selectIsLoadingAuth);
  const authError = useSelector(selectAuthError);
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {},
  });

  const {email: emailError, password: passwordError} = errors;

  const onSubmit: SubmitHandler<FormValues> = data => {
    dispatch(signinActions(data));
  };

  useEffect(() => {
    if (emailError) {
      setFormError({
        name: 'email',
        message: emailError.message,
        type: emailError.type,
      });
    } else if (passwordError) {
      setFormError({
        name: 'password',
        message: passwordError.message,
        type: passwordError.type,
      });
    } else if (authError) {
      setFormError({
        name: 'Signin Failed',
        message: authError.message,
        type: authError.name,
      });
    } else setFormError({});
  }, [emailError, passwordError, authError]);

  return (
    <View style={classes.formContainer}>
      <View style={classes.formHeadType}>
        <TouchableOpacity
          style={classes.checkbox}
          onPress={() => setTypeSignin('email')}>
          <RadioItem
            checked={typeSignin === 'email'}
            colorChecked="#24cf5f"
            colorUnchecked="#7196B9"
          />
          <Text style={classes.checkboxLabel}>Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={classes.checkbox}
          onPress={() => setTypeSignin('phone')}>
          <RadioItem
            checked={typeSignin === 'phone'}
            colorChecked="#24cf5f"
            colorUnchecked="#7196B9"
          />
          <Text style={classes.checkboxLabel}>Numéro de téléphone</Text>
        </TouchableOpacity>
      </View>
      <View style={classes.errorContainer}>
        {formError && Object.keys(formError).length > 0 && (
          <View style={classes.errorBox}>
            <Text style={classes.errorText}>{formError?.message}</Text>
          </View>
        )}
      </View>

      <View style={classes.formContent}>
        {typeSignin === 'email' ? (
          <View style={classes.formInput}>
            <Text style={classes.inputLabel}>Email</Text>

            <Controller
              name="email"
              control={control}
              render={({field: {onChange, value, name}}) => (
                <TextInput
                  value={value}
                  style={[
                    classes.inputItem,
                    formError?.name === name ? classes.inputError : null,
                  ]}
                  placeholder="example@example.com"
                  onChangeText={onChange}
                />
              )}
              rules={{required: {value: true, message: 'Email required'}}}
            />
          </View>
        ) : (
          <View style={classes.formInput}>
            <Text style={classes.inputLabel}>Phone</Text>

            <Controller
              name="email"
              control={control}
              render={({field: {onChange, value, name}}) => (
                <TextInput
                  value={value}
                  style={[
                    classes.inputItem,
                    formError?.name === name ? classes.inputError : null,
                  ]}
                  placeholder="example@example.com"
                  onChangeText={onChange}
                />
              )}
              rules={{required: {value: true, message: 'Email required'}}}
            />
          </View>
        )}

        <View
          style={[classes.formInput, {marginTop: 16, position: 'relative'}]}>
          <Text style={classes.inputLabel}>Mot de Passe</Text>
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, value, name}}) => (
              <TextInput
                style={[
                  classes.inputItem,
                  {paddingRight: 50},
                  formError?.name === name ? classes.inputError : null,
                ]}
                secureTextEntry={isShowPass ? false : true}
                value={value}
                placeholder="Votre mot de passe"
                onChangeText={onChange}
              />
            )}
            rules={{required: {value: true, message: 'Password require'}}}
          />
          <IconButton
            style={classes.iconShowPassword}
            icon={isShowPass ? 'eye-off' : 'eye'}
            color="rgb(146, 150, 153)"
            children
            onPress={() => setIsShowPass(prev => !prev)}
          />
        </View>
        <View style={classes.linkAction}>
          <Text style={{fontSize: 13, color: '#24cf5f', fontWeight: '600'}}>
            Mot de passe oublié ?
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={classes.textContact}>Nous contacter</Text>
            <Text style={[classes.textContact, {textDecorationLine: 'none'}]}>
              ou
            </Text>
            <Text style={classes.textContact}>Aide</Text>
          </View>
        </View>

        <TouchableOpacity
          disabled={isSigning ? true : false}
          style={[classes.btn, isSigning ? {backgroundColor: '#ccc'} : null]}
          onPress={handleSubmit(onSubmit)}>
          {isSigning ? (
            <ActivityIndicator animating={true} color="#fff" size={40} />
          ) : (
            <Text style={classes.textBtn}>me connecter</Text>
          )}
        </TouchableOpacity>
      </View>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <Text style={{fontSize: 14, letterSpacing: 0, color: '#313840'}}>
          Vous n'avez pas de compte?
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#24cf5e',
            fontWeight: '600',
            letterSpacing: 0,
            marginLeft: 5,
          }}
          onPress={onSignup}>
          Inscrivez-vous gratuitement
        </Text>
      </View>
    </View>
  );
};

export default SigninForm;
