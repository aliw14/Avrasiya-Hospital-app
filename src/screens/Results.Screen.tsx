import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Text, View} from 'react-native';
import {NavigationParamList} from '../types/navigation.types';
import {Routes} from '../router/routes';

export const ResultsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.results>
> = () => {
  return (
    <View>
      <Text>Results Screen</Text>
    </View>
  );
};
