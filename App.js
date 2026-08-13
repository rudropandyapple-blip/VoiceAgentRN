import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0a0a0f' }}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;