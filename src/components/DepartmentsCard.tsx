import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from 'react-native';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import {Button} from './Button';

export interface IDepartment {
  id: number;
  title: string;
  description: string;
  image: React.FC<SvgProps> | ImageSourcePropType;
  buttonText: string;
}

export const DepartmentCard: React.FC<IDepartment> = props => {
  const {title, description, image} = props;

  return (
    <Pressable style={styles.card}>
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Button type="text" text={props.buttonText}></Button>
      </View>
      <View style={styles.imageContainer}>
        {typeof image === 'function' ? (
          <image width={100} height={100} />
        ) : (
          <Image source={image} style={styles.image} />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  texts: {
    width: '50%',
    left: 30,
  },
  title: {
    fontSize: 21.333,
    color: '#24a63f',
    fontWeight: '400',
    marginTop: 5,
    marginBottom: 1.5,
    textAlign: 'left',
  },
  description: {
    fontSize: 14,
    width: '100%',
    textAlign: 'left',
    color: '#333',
    marginVertical: 'auto',
  },
  imageContainer: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
  },
});
