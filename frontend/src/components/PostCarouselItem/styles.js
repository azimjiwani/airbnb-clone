import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 120,
    padding: 5,


    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  innerContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden'
  },

  coverImage: {
    height: '100%',
    aspectRatio: 1,
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
  rentalType: {
    fontSize: 18,
    lineHeight: 26,
  },
  location: {
    fontSize: 18,
    lineHeight: 26,
  },
  price: {
    fontWeight: 'bold',
  },
});

export default styles;