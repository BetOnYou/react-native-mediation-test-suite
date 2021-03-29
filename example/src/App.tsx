import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import MediationTestSuite from 'react-native-mediation-test-suite';

export default function App() {
  return (
    <View style={styles.container}>
      <Button
        title="Open Mediation Test Suite"
        onPress={() => {
          MediationTestSuite.launch();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
