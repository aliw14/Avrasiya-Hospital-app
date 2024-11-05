import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../router/routes';

export type AppNavigation = NativeStackNavigationProp<NavigationParamList>;

export type NavigationParamList = {
    [Routes.authRouter]: { isAuth: boolean };
    [Routes.test]: undefined;
    [Routes.mainrouter]: undefined;
    [Routes.welcome]: undefined;
    [Routes.homescreen]:undefined;
};
