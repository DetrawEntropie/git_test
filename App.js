/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
 
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
 
} from 'react-native/Libraries/NewAppScreen';
 import Laouen from './components/Laouen';
 import Dorian  from './components/Dorian';
const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <Dorian/>
      <Laouen/>
      
    </Fragment>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
