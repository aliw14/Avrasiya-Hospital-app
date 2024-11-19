import React, {useCallback} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.types';
import {Routes} from '../router/routes';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';
import {DoctorCart} from '../components/DoctorCart';
import {DoctorsCartItem} from '../types/Doctors.types';
import {Doctors} from '../mock/DoctorsMock';
import {FlashList} from '@shopify/flash-list';

export const DoctorsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.doctors>
> = () => {
  const renderItem = useCallback(({item}: {item: DoctorsCartItem}) => {
    return (
      <Pressable>
        <DoctorCart id={item.id} image={item.image} name={item.name} />
      </Pressable>
    );
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Header leftActionType="icon" left={vectors.hamburger_menu} />
        </View>
        <Image
          style={styles.logo}
          source={require('../assets/images/logo_Avrasiya.png')}
        />
      </View>
      <FlashList
        style={styles.flatListContent}
        data={Doctors}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
  flatListContent: {
    alignItems: 'center',
  },
});
const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    color: colors.ink.base,
    width: 24,
    height: 24,
  },
  hamburger_menu: {
    icon: require('../assets/vectors/hamburger_menu.svg'),
    color: colors.ink.base,
    width: 24,
    height: 24,
  },
};
