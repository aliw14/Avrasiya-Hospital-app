import {SafeAreaView} from 'react-native';
import {NavigationParamList} from '../types/navigation.types';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  authStackScreenOption,
  defaultScreenOptions,
} from '../configs/navigation.configs';
import {Routes} from './routes';
import {CommonStyles} from '../theme/common.styles';
import {WelcomeScreen} from '../screens/auth/Welcome.Screen';
import {RegisterScreen} from '../screens/auth/Register.Screen';
import {HomeScreen} from '../screens/Home.Screen';
import {DoctorsScreen} from '../screens/Doctors.Screen';
import { MedicalDepartmentScreen } from '../screens/MedicalDepartment.Screen';
import { RandevuScreen } from '../screens/Randevu.Screen';
import { ResultsScreen } from '../screens/Results.Screen';

const AuthStack = createNativeStackNavigator<NavigationParamList>();

export const AuthRouter = () => {
  return (
    <SafeAreaView style={CommonStyles.flex}>
      <AuthStack.Navigator
        screenOptions={authStackScreenOption}
        initialRouteName={Routes.welcome}>
        <AuthStack.Screen
          name={Routes.welcome}
          component={WelcomeScreen}
          options={defaultScreenOptions}
        />
        <AuthStack.Screen name={Routes.register} component={RegisterScreen} />
        <AuthStack.Screen name={Routes.home} component={HomeScreen} />
        <AuthStack.Screen name={Routes.doctors} component={DoctorsScreen} />
        <AuthStack.Screen name={Routes.medicalDepartment} component={MedicalDepartmentScreen} />
        <AuthStack.Screen name={Routes.randevu} component={RandevuScreen} />
        <AuthStack.Screen name={Routes.results} component={ResultsScreen} />
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};
