import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Navigator from './src/navigation/AppNavigator';

import Splash from './src/screen/Splash';

const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
