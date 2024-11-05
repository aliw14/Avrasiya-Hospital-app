import {View, Text} from 'react-native';
import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.types';
import {Routes} from '../router/routes';

const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.homescreen>
> = () => {
  return (
    <View style={{flex:1}}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
