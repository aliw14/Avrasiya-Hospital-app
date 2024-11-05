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
      </AuthStack.Navigator>
    </SafeAreaView>
  );
};
