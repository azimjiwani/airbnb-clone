import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LocationSearchScreen from '../screens/LocationSearch';
import FiltersScreen from '../screens/Filters';
import HomeTabNavigator from './HomeTabNavigator';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={"Home"} component={HomeTabNavigator} options = {{headerShown:false}}/>
                <Stack.Screen name={"Location Search"} component={LocationSearchScreen} options = {{title:"Search a city"}}/>
                <Stack.Screen name={"Filters"} component={FiltersScreen} options = {{title:"Filters"}}/>
                <Stack.Screen name={"Post"} component={PostScreen} options = {{title:"Listing"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;