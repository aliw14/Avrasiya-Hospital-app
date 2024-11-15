import React from 'react';
import {
  Image,
  // Text,
  StyleSheet,
  Pressable,
  ImageSourcePropType,
  View,
  Text,
} from 'react-native';
import {SvgProps} from 'react-native-svg';

interface IInformation {
  id: number;
  image: React.FC<SvgProps> | ImageSourcePropType;
  title: string;
  description: string;
  date: string;
}

export const InformationCart: React.FC<IInformation> = ({
  image,
  title,
  description,
  date,
}) => {
  return (
    <Pressable style={styles.card}>
      <View style={styles.imageContainer}>
        {typeof image === 'function' ? (
          <image width={100} height={100} />
        ) : (
          <Image source={image} style={styles.image} />
        )}
      </View>{' '}
      <View style={styles.texts}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.linkBelow}>
        <Text>'right'</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    flexDirection: 'column',
    borderRadius: 20,
    marginTop: 50,
  },
  texts: {
    maxWidth: '100%',
    left: 30,
  },
  title: {
    fontSize: 19,
    color: '#24a63f',
    fontWeight: '500',
    textAlign: 'left',
    padding: 7,
    width: '100%',
    lineHeight: 24,
  },
  description: {
    fontSize: 14,
    maxWidth: '100%',
    width: '90%',
    textAlign: 'left',
    color: '#333',
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: 20,
  },
  image: {
    borderRadius: 20,
    resizeMode: 'contain',
  },
  date: {
    backgroundColor: '#24a63f',
    color: '#fff',
    textAlign: 'right',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 210,
    paddingRight: 10,
  },
  linkBelow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    left: 30,
    maxWidth: '90%',
    alignItems: 'center',
    marginTop: 10,
  },
});
