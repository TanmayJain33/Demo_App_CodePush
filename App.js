import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import codePush from 'react-native-code-push';

const App = () => {
  return (
    <SafeAreaView>
      <Text>Sample App</Text>
      <Text>Hello</Text>
      <Text>All</Text>
    </SafeAreaView>
  );
};

const codePushOptions = {checkFrequency: codePush.CheckFrequency.ON_APP_START};

export default codePush(codePushOptions)(App);
