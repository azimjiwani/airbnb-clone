import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginTop: 45,
        marginLeft: 25,
    },
    button: {
        backgroundColor: '#fff',
        width: 200,
        height: 40,
        borderRadius: 10,
        marginTop: 25,
        marginLeft: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    searchButton: {
        backgroundColor: '#fff',
        height: 60,
        marginLeft: 25,
        width: Dimensions.get('screen').width - 50,
        borderRadius: 30,
        flexDirection: 'row', // puts icons side by side with text or anything else
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 50,
        zIndex: 100, // makes sure that content gets presented on top of everything else
    },
    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },

});

export default styles;