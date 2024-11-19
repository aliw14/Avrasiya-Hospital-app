import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import {SvgImage} from './SvgImage';

export interface IButton {
  text: string;
  onPress?: () => void;
  type?: 'text' | 'default';
  rightIcon?: React.FC<SvgProps>;
}

export const Button: React.FC<IButton> = ({
  text,
  onPress,
  type = 'default',
  rightIcon: RightIcon,
}) => {
  const getButtonStyle = () => {
    switch (type) {
      case 'default':
        return styles.defaultButton;
      case 'text':
        return styles.textButton;
      default:
        return styles.defaultButton;
    }
  };

  const getTextStyle = () => {
    switch (type) {
      case 'text':
        return styles.textButtonText;
      default:
        return styles.defaultButtonText;
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={getButtonStyle()}>
      <View style={styles.content}>
        <Text style={getTextStyle()}>{text}</Text>
        {RightIcon && (
          <View style={styles.iconContainer}>
            <SvgImage
              style={styles.iconContainer}
              source={require('../assets/svgs/arrow_right.svg')}></SvgImage>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  defaultButton: {
    borderWidth: 1,
    borderRadius: 14,
    padding: 17,
    margin: 10,
    borderColor: '#fff',
    backgroundColor: '#2bc990',
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaultButtonText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
  textButton: {
    padding: 10,
    borderWidth: 0,
    backgroundColor: 'transparent',
    textAlign: 'left',
  },
  textButtonText: {
    fontSize: 18,
    color: '#2bc990',
    textAlign: 'left',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 8,
    width: 20,
    height: 20,
    borderWidth: 1,
  },
});
