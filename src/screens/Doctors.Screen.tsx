import React, {useCallback, useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  TextInput,
  Dimensions,
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
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState(Doctors);

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    if (text.trim() === '') {
      setFilteredDoctors(Doctors); // Reset to full list if search is empty
    } else {
      const filtered = Doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredDoctors(filtered);
    }
  };

  const renderItem = useCallback(
    ({item}: {item: DoctorsCartItem}) => (
      <Pressable>
        <DoctorCart id={item.id} image={item.image} name={item.name} />
      </Pressable>
    ),
    [],
  );

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
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search for a doctor..."
          value={searchTerm}
          onChangeText={handleSearch}
        />
      </View>
      <FlashList
        style={styles.flatListContent}
        data={filteredDoctors}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        estimatedItemSize={100} // Optimize performance for large lists
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
  searchContainer: {
    borderRadius: 8,
    padding: 8,
    marginVertical: 16,
    width: Dimensions.get('screen').width - 10,
    alignSelf: 'center',
  },
  input: {
    height: 50,
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    backgroundColor: colors.white,
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
