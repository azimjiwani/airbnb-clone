/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

//  import 'react-native-gesture-handler';
 import React from 'react';
 import { StatusBar, SafeAreaView} from 'react-native';
 import HomeScreen from './src/screens/Home';
 import Listing from './src/components/Listing';
 
//  import Router from './src/navigation/Router';
 
//  import HomeScreen from './src/screens/Home';
 
//  import { withAuthenticator } from 'aws-amplify-react-native';
 
 const App: () => React$Node = () => {
   return (
     <>
       <StatusBar barStyle="dark-content" />
        <SafeAreaView>
        {/* <HomeScreen/> */}
          <Listing/>
        </SafeAreaView>
     </>
   );
 };
 
 export default App;