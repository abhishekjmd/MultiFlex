import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import MultiFlex from './MultiFlex';
import AuthNavigation from './src/Navigation/AuthNavigation.js/AuthNavigation';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <AuthNavigation />
    </View>
  );
};

export default App;
