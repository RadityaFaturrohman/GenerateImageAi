/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Layout from './app/_layout';
import Discover from './app/screens/Discover/Discover';
import Home from './app/screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './Navigation/tabs';

function App() {
  return (
    <Layout>
      <NavigationContainer>
        <Tabs />
      </NavigationContainer>
    </Layout>
  );
}


export default App;
