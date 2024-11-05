import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Router from './src/router/Router';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.root}>
        <Router />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
