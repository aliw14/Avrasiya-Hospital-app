import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {colors} from '../theme/colors';
import {Routes} from '../router/routes';
import {SvgImage} from '../components/SvgImage';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

export const defaultScreenOptions: NativeStackNavigationOptions = {
  headerShown: false,
  orientation: 'portrait',

  contentStyle: {
    backgroundColor: '#fff',
  },
};

export const authStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  contentStyle: {
    backgroundColor: '#fff',
    // paddingHorizontal: normalize('horizontal', padding),
  },
};

export const modalStackScreenOption: NativeStackNavigationOptions = {
  ...defaultScreenOptions,
  presentation: 'transparentModal',
  animation: 'fade_from_bottom',

  contentStyle: {
    backgroundColor: colors.transparent,
  },
};

export const tabBarScreenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: colors.primary.base,
  tabBarInactiveTintColor: colors.sky.dark,
};
interface ISearchScreenOptions extends NativeStackNavigationOptions {
  items?: string | null;
}

export const searchScreenOptions: ISearchScreenOptions = {
  ...defaultScreenOptions,
  presentation: 'formSheet',
  headerTitle: 'Search Product',
  headerShown: true,
  headerLargeTitle: true,
  headerSearchBarOptions: {
    hideWhenScrolling: false,
    inputType: 'text',
    autoFocus: true,
    onChangeText(e) {
      const text = e.nativeEvent.text;
      console.log(text);
    },
  },
};
const tabIconConfig: {[key: string]: NodeRequire} = {
  [Routes.home]: require('../assets/vectors/home.svg'),
  [Routes.medicalDepartment]: require('../assets/vectors/TibbiBolmeler.svg'),
  [Routes.doctors]: require('../assets/vectors/Hekimler.svg'),
  [Routes.randevu]: require('../assets/vectors/eRandevu.svg'),
  [Routes.results]: require('../assets/vectors/eNeticeler.svg'),
};

const renderTabIcon =
  (routeName: Routes) =>
  ({color}: {color: string}) => {
    return (
      <SvgImage
        source={tabIconConfig[routeName]}
        width={24}
        height={24}
        color={color}
      />
    );
  };

export const tabBarOption = {
  [Routes.home]: {
    tabBarIcon: renderTabIcon(Routes.home),
  },
  [Routes.medicalDepartment]: {
    tabBarIcon: renderTabIcon(Routes.medicalDepartment),
  },
  [Routes.doctors]: {
    tabBarIcon: renderTabIcon(Routes.doctors),
  },
  [Routes.randevu]: {
    tabBarIcon: renderTabIcon(Routes.randevu),
  },
  [Routes.results]: {
    tabBarIcon: renderTabIcon(Routes.results),
  },
};
