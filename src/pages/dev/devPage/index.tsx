import { SafeAreaView, ScrollView, StatusBar, Text, useColorScheme } from 'react-native'
import styles from '../../../theme/app.scss'
import { EAppIdPrefix, EModulePrefix, EThemePrefix } from '../../../theme/config'
import { Fragment, useEffect, useMemo, useState } from 'react'

const DevPage = (): React.ReactElement => {
  const theme = useColorScheme(); 
  const prifix = useMemo(() => {
    return `${EAppIdPrefix.MX_ONE}-${theme}-${EModulePrefix.COMPONENT}`
  }, [theme])

  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles[`${prifix}-text`]}>123</Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

export default DevPage
