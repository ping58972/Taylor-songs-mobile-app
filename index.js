/**
 * @format
 */

// import { AppRegistry } from 'react-native';
// import App from './App';
// import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// Create a component
// eslint-disable-next-line arrow-body-style
const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText='Albums' />
      <AlbumList />
    </View>
  );
};

// Render it to the device
AppRegistry.registerComponent('albumss', () => App);
