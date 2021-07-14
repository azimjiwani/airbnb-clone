import React, {useState} from 'react';
import { View, TextInput,Text,FlatList,Pressable } from 'react-native';
import styles from './styles.js';
import searchLocationResult from '../../../assets/data/searchLocation';
import Entypo from 'react-native-vector-icons/Entypo';
import {useNavigation} from '@react-navigation/native';

const LocationSearchScreen = (props) => {

    const [inputText,setInputText]=useState('');
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* input component */}
            <TextInput
                style = {styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* list of destinations */}
            <FlatList
                data={searchLocationResult}
                renderItem = {({item}) => (
                    <Pressable onPress = {() => navigation.navigate('Filters')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={35}/>
                        </View>
                        <Text>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
}

export default LocationSearchScreen;