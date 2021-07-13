import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: '#676767',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonItem: {
      fontSize:20,
      fontWeight:'600',
      color: "#474747"
  },
  bed:{
      fontWeight:"bold",
      fontSize: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
//   slider for price
    slider:{

    },
});

export default styles;