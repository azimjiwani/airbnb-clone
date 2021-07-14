import React from 'react';
import { View,Text,ImageBackground,Pressable } from 'react-native';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View>
            {/* Search bar */}
            <Pressable
                style={styles.searchButton}
                onPress={() => navigation.navigate('Location Search')}>
                <Fontisto name = 'search' size = {25} color = {"#f15454"}></Fontisto>
                <Text style={styles.searchButtonText}>Search for rentals</Text>
            </Pressable>
            <ImageBackground source = {require('frontend/assets/images/wallpaper.jpg')} style={styles.image}>
            {/* Title */}
            <Text style={styles.title}>Find Your Next Home</Text>
            {/* Button */}
            <Pressable
                style={styles.button}
                onPress={() => console.warn('Find rentals btn clicked')}>
                <Text style={styles.buttonText}>Explore rentals</Text>
            </Pressable>
            </ImageBackground>
        </View>
    );
}

export default HomeScreen;