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


const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

//  import { withAuthenticator } from 'aws-amplify-react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content"/>
        <Router/>
        {/* <HomeScreen/> */}
        {/* <Post post = {post1}/> */}
        {/* <SearchResultsScreen/> */}
        {/* <LocationSearchScreen/> */}
        {/* <FiltersScreen/> */}
    </>
  );
};

export default App;