import React from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {TextInput, View} from 'react-native';
import {Button} from 'react-native-paper';
import {signin} from '../../../api/axiosAuth';
import Text from '../../../common/components/MyAppText';
import RadioItem from '../../../common/components/RadioItem';
import classes from './styles';

const SigninForm = () => {
  type FormValues = {
    email: string;
    password: string;
  };
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
  });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    console.log('🚀 ~ data', data);
    const formData = new FormData();

    formData.append('login', data.email);
    formData.append('password', data.password);
    formData.append('validitySeconds', 670000);
    const res = await signin({
      login: data.email,
      password: data.password,
      validitySeconds: 670000,
    });
    console.log('🚀 ~ res', res);
  };

  return (
    <View style={classes.formContainer}>
      <View style={classes.formHeadType}>
        <View style={classes.checkbox}>
          <RadioItem checked={true} colorChecked="#24cf5f" />
          <Text style={classes.checkboxLabel}>Email</Text>
        </View>
        <View style={classes.checkbox}>
          <RadioItem checked={false} colorChecked="#24cf5f" />
          <Text style={classes.checkboxLabel}>Numéro de téléphone</Text>
        </View>
      </View>
      <View style={classes.errorContainer}>
        <View style={classes.errorBox}>
          <Text style={classes.errorText}>jkhjkh</Text>
        </View>
      </View>

      <View style={classes.formContent}>
        <View style={classes.formInput}>
          <Text style={classes.inputLabel}>Email</Text>

          <Controller
            name="email"
            control={control}
            render={({field: {onChange, value}}) => (
              <TextInput
                value={value}
                style={classes.inputItem}
                placeholder="example@example.com"
                onChangeText={onChange}
              />
            )}
          />
        </View>
        <View
          style={[classes.formInput, {marginTop: 16, position: 'relative'}]}>
          <Text style={classes.inputLabel}>Mot de Passe</Text>
          <Controller
            name="password"
            control={control}
            render={({field: {onChange, value}}) => (
              <TextInput
                style={classes.inputItem}
                secureTextEntry={true}
                value={value}
                placeholder="Votre mot de passe"
                onChangeText={onChange}
              />
            )}
          />
          <Button
            style={classes.iconShowPassword}
            icon="eye"
            color="rgb(146, 150, 153)"
            children
          />
          {/* <TextInput
            style={classes.inputItem}
            secureTextEntry={true}
            placeholder="Votre mot de passe"
          />
          <Button
            style={classes.iconShowPassword}
            icon="eye"
            color="rgb(146, 150, 153)"
          /> */}
        </View>
        <View style={classes.linkAction}>
          <Text style={{fontSize: 13, color: '#24cf5f', fontWeight: '600'}}>
            Mot de passe oublié ?
          </Text>
          <View style={{flexDirection: 'row'}}>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 2,
                textDecorationLine: 'underline',
              }}>
              Nous contacter
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 2,
              }}>
              ou
            </Text>
            <Text
              style={{
                fontSize: 14,
                paddingLeft: 2,
                textDecorationLine: 'underline',
              }}>
              Aide
            </Text>
          </View>
        </View>
        <Button
          mode="contained"
          style={classes.btn}
          onPress={handleSubmit(onSubmit)}>
          <Text style={classes.textBtn}>me connecter</Text>
        </Button>
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
          }}>
          Inscrivez-vous gratuitement
        </Text>
      </View>
    </View>
  );
};

export default SigninForm;
