/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import type Node from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';


import {
  SafeAreaView,

  StatusBar,

} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//import Home from './src/screens/Home';
import Navigation from './src/navigation';

const App: () => Node = () => {
  return (
    <>
      <StatusBar barStyle='light-content' />
      <SafeAreaView style ={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};


export default App;
