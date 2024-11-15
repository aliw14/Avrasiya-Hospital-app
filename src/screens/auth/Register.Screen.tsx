/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../../types/navigation.types';
import {Routes} from '../../router/routes';
import {Input} from '../../components/Inputs.tsx';
import {Button} from '../../components/Button.tsx';
import {colors} from '../../theme/colors.ts';
// import {colors} from '../../theme/colors.ts';

export const RegisterScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.register>
> = ({navigation}) => {
  const onSignInPress = () => {
    navigation.navigate(Routes.welcome);
  };
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.image}
          source={require('../../../src/assets/images/logo_Avrasiya.png')}
        />
      </View>
      <Text style={styles.welcome}>Create Your Account</Text>
      {/* <Text style={styles.text}>Please Log into your existing account</Text> */}
      <View style={styles.input}>
        <Input style={styles.inp} placeholder="UserName" type="text" />
        <Input style={styles.inp} placeholder="Your Email" type="text" />
        <Input
          style={styles.inp}
          placeholder="Your Password"
          type="password"
          icon={require('../../assets/vectors/eye.svg')}
          iconPosition="right"
        />
        <Input
          style={styles.inp}
          placeholder="Confirm Password"
          type="password"
          icon={require('../../assets/vectors/eye.svg')}
          iconPosition="right"
        />
      </View>
      <View style={{marginTop: 7}}>
        <Button type='default' text="Register" onPress={() => console.log('clicked')} />
      </View>
      <View style={styles.texts}>
        <Text style={styles.question}>Already have an Account?</Text>
        <Text onPress={onSignInPress} style={styles.signin}>
          Sign In
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#0A0171',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    alignSelf: 'center',
    marginVertical: 20,
    color: '#fff',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 10,
    color: '#fff',
  },
  input: {
    marginTop: 24,
  },
  image: {
    width: 330,
    height: 100,
    objectFit: 'contain',
    alignSelf: 'center',
    marginBottom: 51,
  },
  inp: {
    margin: 16,
    borderWidth:1
  },
  toRegister: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 15,
  },
  texts: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20,
  },
  question: {
    color: colors.white,
  },
  signin: {
    color: colors.white,
    marginLeft: 25,
  },
});
