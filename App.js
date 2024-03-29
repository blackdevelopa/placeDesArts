import React from 'react';
import { View, StatusBar, YellowBox } from 'react-native';
import styles from './AppStyle'
import AppNavigator from './src/AppNavigator';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" hidden={true} />
      <AppNavigator />
    </View>
  );
};

YellowBox.ignoreWarnings([
  'Warning: componentWillMount is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
]);

export default App;
