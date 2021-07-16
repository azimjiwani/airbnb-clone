/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultsScreen from './src/screens/SearchResult';
import LocationSearchScreen from './src/screens/LocationSearch';
import FiltersScreen from './src/screens/Filters';
import Router from './src/navigation/Router';
import PostScreen from './src/screens/PostScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
      <Router/>
    </>
  );
};

export default App;