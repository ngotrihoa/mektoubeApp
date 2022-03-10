import {View, TextInput} from 'react-native';
import Text from '../../../common/components/MyAppText';
import React from 'react';
import classes from './styles';
import RadioItem from '../../../common/components/RadioItem';
import {Button} from 'react-native-paper';
import {Controller, useForm} from 'react-hook-form';

const SigninForm = () => {
  const {control, handleSubmit, formState} = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    delayError: undefined,
  });

  const onSubmit = handleSubmit(data => {
    console.log('submit');
  });

  return (
    <View style={classes.formContainer}>
      <View style={classes.formHeadType}>
        <View style={classes.checkbox}>
          <RadioItem checked={true} color="#24cf5f" />
          <Text style={classes.checkboxLabel}>Email</Text>
        </View>
        <View style={classes.checkbox}>
          <RadioItem checked={false} color="#24cf5f" />
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
                onChange={onChange}
              />
            )}
            rules={{required: true}}
          />
        </View>
        <View
          style={[classes.formInput, {marginTop: 16, position: 'relative'}]}>
          <Text style={classes.inputLabel}>Mot de Passe</Text>
          <TextInput
            style={classes.inputItem}
            secureTextEntry={true}
            placeholder="Votre mot de passe"
          />
          <Button
            style={classes.iconShowPassword}
            icon="eye"
            color="rgb(146, 150, 153)"
          />
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
        <Button mode="contained" style={classes.btn} onPress={onSubmit}>
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
