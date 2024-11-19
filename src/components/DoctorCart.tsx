import React from 'react';
import {Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface IDoctorCart {
  id: number;
  image: React.FC<SvgProps> | ImageSourcePropType;
  name: string;
}

export const DoctorCart: React.FC<IDoctorCart> = ({image, name}) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{maxWidth: screenWidth * 0.45}}> {/* Adjusts the width dynamically */}
      <View style={styles.cart}>
        <View style={styles.imageContainer}>
          {typeof image === 'function' ? (
            <image width={100} height={100} />
          ) : (
            <Image source={image} style={styles.image} />
          )}
        </View>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cart: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: 150,
    height: 150,
    borderRadius: 20,
  },
  text: {
    color: '#24a63f',
    fontWeight: '500',
    fontSize: 21,
    textAlign: 'center',
    marginTop: 6,
  },
});
