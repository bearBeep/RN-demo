/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useCallback } from 'react'
import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native'
import setup from './src/setup';

function App(): React.JSX.Element {
  var [isInited, setIsInited] = React.useState(false)

  const init = useCallback(async () => {
    await setup()
    setIsInited(true)
  }, [])

  init()

  const renderView = (
    <>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text>123</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  )

  if (!isInited) {
    return <></>
  }

  return renderView
}

export default App
