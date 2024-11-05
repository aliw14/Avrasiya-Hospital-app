import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.types';
import {Routes} from './routes';
import {defaultScreenOptions} from '../configs/navigation.configs';
import HomeScreen from '../screens/Home.Screen';

export const MainRouter = () => {
  const MainStack = createNativeStackNavigator<NavigationParamList>();
  return (
    <MainStack.Navigator
      initialRouteName={Routes.test}
      screenOptions={defaultScreenOptions}>
      <MainStack.Screen name={Routes.homescreen} component={HomeScreen} />
    </MainStack.Navigator>
  );
};
