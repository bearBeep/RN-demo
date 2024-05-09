/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { Fragment, useCallback, useMemo } from 'react'
import Route from './src/routes/index'
import setup from './src/setup'

function App(): React.JSX.Element {
  var [isInited, setIsInited] = React.useState(false)

  const init = useCallback(async () => {
    await setup()
    setIsInited(true)
  }, [])

  init()

  const renderView = useMemo(() => {
    return (
      <>
        <Route />
      </>
    )
  }, [])

  if (!isInited) {
    return <></>
  }

  return renderView
}

export default App
