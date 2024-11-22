import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {departmentMap} from '../mock/AlphabetDepartment';
import {FlashList} from '@shopify/flash-list';

const AlphabetCards: React.FC = () => {
  const availableLetters = Object.keys(departmentMap);
  const renderItem = ({item}: {item: string}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.letter}>{item}</Text>
        {departmentMap[item].map((dept, index) => (
          <Pressable onPress={() => console.log(dept)}>
            <Text key={index} style={styles.department}>
              {dept}
            </Text>
          </Pressable>
        ))}
      </View>
    );
  };
  return (
    <FlashList
      data={availableLetters}
      keyExtractor={item => item}
      contentContainerStyle={styles.container}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center',
  },
  letter: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  department: {
    marginTop: 5,
    fontSize: 18,
    color: '#666',
  },
});

export default AlphabetCards;
