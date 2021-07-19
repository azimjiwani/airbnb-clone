import React, {useState} from 'react';
import { View,Text,Pressable,Switch } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles.js'

const FiltersScreen = (props) => {

    const [beds, setBeds] = useState(1);
    const [baths, setBaths] = useState(1);
    const [price, setPrice] = useState(0);
    const [leaseEnabled, setLeaseEnabled] = useState(false);
    const leaseToggle = () => setLeaseEnabled(previousState => !previousState);
    const [subletEnabled, setSubletEnabled] = useState(false);
    const subletToggle = () => setSubletEnabled(previousState => !previousState);
    const navigation = useNavigation();

    return (
        <View style={{justifyContent:'space-between', height: '100%'}}>
            <View>
                {/* row 1: number of beds */}
                <View style={styles.row}>
                    {/* view for text */}
                    <View>
                        <Text style={styles.bed}>Beds</Text>
                    </View>
                    {/* Buttons to change value */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/* - */}
                        <Pressable onPress={() => setBeds(Math.max(1,beds-1))} style={styles.button}>
                            <Text style={styles.buttonItem}>-</Text>
                        </Pressable>
                        {/* val */}
                        <Text style={{marginHorizontal:20, fontSize:16}}>{beds}</Text>
                        {/* + */}
                        <Pressable onPress={() => setBeds(Math.min(7,beds+1))} style={styles.button}>
                            <Text style={styles.buttonItem}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* row 2: number of baths */}
                <View style={styles.row}>
                    {/* view for text */}
                    <View>
                        <Text style={styles.bed}>Baths</Text>
                    </View>
                    {/* Buttons to change value */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/* - */}
                        <Pressable onPress={() => setBaths(Math.max(1,baths-1))} style={styles.button}>
                            <Text style={styles.buttonItem}>-</Text>
                        </Pressable>
                        {/* val */}
                        <Text style={{marginHorizontal:20, fontSize:16}}>{baths}</Text>
                        {/* + */}
                        <Pressable onPress={() => setBaths(Math.min(6,baths+1))} style={styles.button}>
                            <Text style={styles.buttonItem}>+</Text>
                        </Pressable>
                    </View>
                </View>
                {/* row 3: price */}
                {/* row 4: lease */}
                <View style={styles.row}>
                    {/* view for text */}
                    <View>
                        <Text style={styles.bed}>Lease</Text>
                    </View>
                    {/* Buttons to change value */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/* toggle */}
                        <Switch onPress={() => setLeaseEnabled(previousState => !previousState)}
                            trackColor={{ false: "#767577", true: "#34c759" }}
                            thumbColor={"#f4f3f4"}
                            onValueChange={leaseToggle}
                            value={leaseEnabled}
                        />
                    </View>
                </View>
                {/* row 5: sublet */}
                <View style={styles.row}>
                    {/* view for text */}
                    <View>
                        <Text style={styles.bed}>Sublet</Text>
                    </View>
                    {/* Buttons to change value */}
                    <View style={{flexDirection:'row', alignItems:'center'}}>
                        {/* toggle */}
                        <Switch onPress={() => setSubletEnabled(previousState => !previousState)}
                            trackColor={{ false: "#767577", true: "#34c759" }}
                            thumbColor={"#f4f3f4"}
                            onValueChange={subletToggle}
                            value={subletEnabled}
                        />
                    </View>
                </View>
            </View>

            <View>
                <Pressable onPress={() =>
                    navigation.navigate('Home', {
                        screen: 'Explore',
                        params: {
                            screen: 'SearchResults',
                        },
                    })
                }
                style={{marginBottom:30,
                backgroundColor:'#f15454',
                alignItems:'center',
                justifyContent:'center',
                height:50,
                marginHorizontal:20,
                borderRadius:10}}>
                    <Text style={{fontSize:18, color:'white', fontWeight:'bold'}}>Show Results</Text>
                </Pressable>
            </View>

        </View>
    );
};

export default FiltersScreen;
