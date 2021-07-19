import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearcResultsScreen from '../screens/SearchResult';
import SearchResultTabNavigator from './SearchResultTabNavigator';

const Stack = createStackNavigator();

const Router = (props) => {
return (
    <Stack.Navigator>
    <Stack.Screen
        name={'Explore'}
        component={HomeScreen}
        options={{
        headerShown: false,
        }}
    />

    <Stack.Screen
        name={'SearchResults'}
        component={SearchResultTabNavigator}
        options={{
        title: 'Search a city',
        }}
    />
    </Stack.Navigator>
);
};

export default Router;
