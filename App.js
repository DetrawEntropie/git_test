/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
 import Laouen from './components/Laouen';
 import Dorian from './components/Dorian';
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
