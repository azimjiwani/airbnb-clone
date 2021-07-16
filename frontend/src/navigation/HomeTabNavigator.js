import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';
import LocationSearch from '../screens/LocationSearch';
import ExploreNavigator from './ExploreNavigator';

import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import PostScreen from '../screens/PostScreen';

const Tab = createBottomTabNavigator();

const HomeTabNavigator = (props) => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#f15454',
            }}>
            <Tab.Screen
                name={'Explore'}
                component={ExploreNavigator}
                options={{
                tabBarIcon: ({color}) => (
                    <Fontisto name="search" size={25} color={color} />
                ),
                }}
            />
        </Tab.Navigator>
    );
}

export default HomeTabNavigator;