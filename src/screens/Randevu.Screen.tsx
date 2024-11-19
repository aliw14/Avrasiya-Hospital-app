import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationParamList} from '../types/navigation.types';
import {Routes} from '../router/routes';

export const RandevuScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.randevu>
> = () => {
  return (
    <View>
      <Text> RandevuScreen </Text>
    </View>
  );
};
