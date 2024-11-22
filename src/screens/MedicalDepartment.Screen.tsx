import React from 'react';
import {View, StyleSheet, ScrollView, Image} from 'react-native';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';
import AlphabetCards from '../components/LetterCart';

export const MedicalDepartmentScreen: React.FC = () => {
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
      <AlphabetCards />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
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
