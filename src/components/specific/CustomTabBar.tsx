import {View, Text, StyleSheet} from 'react-native';

export const CustomTabBar = ({state, descriptors, navigation}: any) => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route: any, index: number) => {
        const {options} = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const isFocused = state.index === index;

        const handlePress = () => {
          navigation.navigate(route.name);
        };

        return (
          <Text
            key={route.key}
            style={[styles.tabBarText, isFocused && styles.focusedTabText]}
            onPress={handlePress}>
            {label}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  tabBarText: {
    fontSize: 16,
    color: '#888',
  },
  focusedTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
