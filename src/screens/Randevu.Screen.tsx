import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import {colors} from '../theme/colors';
import {Header} from '../components/Header';
import {Button} from '../components/Button';

export const RandevuScreen: React.FC = () => {
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

      <View style={styles.eRandevuContainer}>
        <Text style={styles.title}>e-Randevu formu</Text>
        <View style={styles.searchContainer}>
          <TextInput style={styles.input} placeholder="Ad, soyad*" />
          <TextInput style={styles.input} placeholder="Telefon*" />
          <TextInput style={styles.input} placeholder="Email*" />
          <TextInput style={styles.bigInput} placeholder="Email*" />
        </View>
        <View style={styles.buttonContainer}>
          <Button text={'Randevu al'}></Button>
        </View>
      </View>
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
  eRandevuContainer: {
    width: Dimensions.get('screen').width,
  },
  title: {
    fontSize: 20,
    alignSelf: 'center',
  },
  searchContainer: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
    width: Dimensions.get('screen').width - 10,
    alignSelf: 'center',
    gap: 12,
  },
  input: {
    height: 50,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: colors.white,
  },
  bigInput: {
    height: 100,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: colors.white,
  },
  buttonContainer: {
    width: Dimensions.get('screen').width - 10,
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
