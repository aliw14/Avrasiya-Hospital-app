import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {FlatList, Image, ScrollView, StyleSheet, View} from 'react-native';
import {NavigationParamList} from '../types/navigation.types';
import {Routes} from '../router/routes';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';
import {Department} from '../mock/DepartmentMock';
import {DepartmentCard} from '../components/DepartmentsCard';
import {DepartmentCartItem} from '../types/Department.types';
import {InformationCart} from '../components/InformationCart';
import {InformationCartData} from '../mock/InformationMock';
import {InformationCartItem} from '../types/InformationCart.types';

export const HomeScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.home>
> = () => {
  const renderItem = useCallback(({item}: {item: DepartmentCartItem}) => {
    return (
      <DepartmentCard
        id={item.id}
        title={item.title}
        description={item.description}
        image={item.image}
        buttonText={item.buttonText}
      />
    );
  }, []);

  const renderInformationCart = useCallback(
    ({item}: {item: InformationCartItem}) => {
      return (
        <InformationCart
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          date={item.date}
        />
      );
    },
    [],
  );
  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Header leftActionType="icon" left={vectors.hamburger_menu}></Header>
        </View>
        <Image
          style={styles.image}
          source={require('../assets/images/logo_Avrasiya.png')}
        />
      </View>
      <FlatList
        data={Department}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      />{' '}
      <View>
        <FlatList
          data={InformationCartData}
          renderItem={renderInformationCart}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />{' '}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 300,
    height: 100,
    objectFit: 'contain',
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
