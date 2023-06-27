import { View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AuthNavigation from './src/Navigation/AuthNavigation.js/AuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import VerifiedAuthNavigation from './src/Navigation/AuthNavigation.js/VerifiedAuthNavigation';

const App = () => {
  const [user,setUser] = useState('')
  useEffect(() => {
    checkUserAuthentication();
  }, [])

  const checkUserAuthentication = async () => {
    const userAuthenticated = await AsyncStorage.getItem('userAuthenticated');
    setUser(userAuthenticated);
  }
  const RenderFunction = () => {

    if (user) {
      return (
        <VerifiedAuthNavigation />
      )
    } else {
      return (
        <AuthNavigation />
      )
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <RenderFunction />
    </View>
  );
};

export default App;
