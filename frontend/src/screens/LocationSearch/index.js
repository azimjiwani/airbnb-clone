import React, {useState} from 'react';
import { View, TextInput,Text,FlatList } from 'react-native';
import styles from './styles.js';
import searchLocationResult from '../../../assets/data/searchLocation';
import Entypo from 'react-native-vector-icons/Entypo';

const LocationSearchScreen = (props) => {

    const [inputText,setInputText]=useState('');

    return (
        <View style={styles.container}>
            {/* input component */}
            <TextInput
                styls = {styles.textInput}
                placeholder="Where are you going?"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* list of destinations */}
            <FlatList
                data={searchLocationResult}
                renderItem = {({item}) => (
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name={"location-pin"} size={35}/>
                        </View>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
}

export default LocationSearchScreen;