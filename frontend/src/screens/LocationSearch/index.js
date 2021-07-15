import React, {useState} from 'react';
import { View, TextInput,Text,FlatList,Pressable } from 'react-native';
import styles from './styles.js';
import searchLocationResult from '../../../assets/data/searchLocation';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import {API_KEY} from '@env';
import SuggestionRow from './SuggestionRow'

const LocationSearchScreen = (props) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Where are you going?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    navigation.navigate('Filters')
                }}
                fetchDetails
                styles={{
                    textInput:styles.textInput
                }}
                query={{
                    key: API_KEY,
                    language: 'en',
                    type:'(cities)'
                }}
                suppressDefaultStyles
                renderRow={(item)=> <SuggestionRow item={item}/>}
            />
        </View>
    );
}

export default LocationSearchScreen;