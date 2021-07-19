import React from 'react';
import { View } from 'react-native';
import {  createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResult from '../screens/SearchResult';
import SearchResultMap from '../screens/SearchResultMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = (props) => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>
            <Tab.Screen name={"list"} component={SearchResult}/>
            <Tab.Screen name={"map"} component={SearchResultMap}/>
    </Tab.Navigator>
    );
};

export default SearchResultTabNavigator;
