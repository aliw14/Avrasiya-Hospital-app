import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/Home.Screen';
import {MedicalDepartmentScreen} from '../screens/MedicalDepartment.Screen';
import {DoctorsScreen} from '../screens/Doctors.Screen';
import {RandevuScreen} from '../screens/Randevu.Screen';
import {ResultsScreen} from '../screens/Results.Screen';
import {Routes} from './routes';
import {CustomTabBar} from '../components/specific/CustomTabBar';
import { SafeAreaView } from 'react-native';

const Tab = createBottomTabNavigator();
export const TabRouter: React.FC = () => {
  return (
    <SafeAreaView style={{flex:1}}>

    <Tab.Navigator
      tabBar={props => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={Routes.home} component={HomeScreen} />
      <Tab.Screen
        name={Routes.medicalDepartment}
        component={MedicalDepartmentScreen}
      />
      <Tab.Screen name={Routes.doctors} component={DoctorsScreen} />
      <Tab.Screen name={Routes.randevu} component={RandevuScreen} />
      <Tab.Screen name={Routes.results} component={ResultsScreen} />
    </Tab.Navigator>
    </SafeAreaView>
  );
};
