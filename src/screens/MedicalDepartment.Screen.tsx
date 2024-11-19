import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export const MedicalDepartmentScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Medical Department Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
