import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  coverImage: {
    width: '100%',
    aspectRatio: 3 / 2,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  bed: {
    marginVertical: 10,
    color: '#5b5b5b',
  },
  title: {
    fontSize: 20,
    lineHeight: 26,
  },
  description: {
    fontSize: 16,
    lineHeight: 26,
  },
  rentalType: {
    fontSize: 18,
    lineHeight: 26,
  },
  location: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  price: {
    fontWeight: 'bold',
  },
});

export default styles;