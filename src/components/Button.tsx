import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface IButton {
  text: string;
  onPress: () => void;
}

export const Button: React.FC<IButton> = ({text, onPress}) => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <Text style={styles.button}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 17,
    margin: 10,
    borderColor: '#fff',
    backgroundColor: '#2bc990',
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
});
