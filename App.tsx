import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {TabRouter} from './src/router/Tab.Router';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';

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
      <NavigationContainer>
        <TabRouter />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
});

export default App;
