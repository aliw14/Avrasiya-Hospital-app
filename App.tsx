import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Router from './src/router/Router';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);
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
