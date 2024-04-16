/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import setup from './src/setup'

function App(): React.JSX.Element {
  var [isInited, setIsInited] = React.useState(false);

  useEffect(() => {
    init();
    return () => {
    };
  }, []);

  const init = useCallback(async () => {
    await setup();
  }, [])

  const renderView = (
    <>
      <SafeAreaView >
        <StatusBar />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        >
          <Text>
            123
          </Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )

  if (!isInited) {
    return <></>;
  }

  return renderView;
}


export default App;
