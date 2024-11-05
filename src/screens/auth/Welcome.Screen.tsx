import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationParamList} from '../../types/navigation.types';
import {Routes} from '../../router/routes';

export const WelcomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.welcome>
> = () => {
  return (
    <View style={{flex:1}}>
      <Text>Welcome Screen</Text>
    </View>
  );
};
