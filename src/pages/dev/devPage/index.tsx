import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native'
import styles from '../../../theme/app.scss'
import { EAppIdPrefix, EModulePrefix, EThemePrefix } from '../../../theme/config'
import { Fragment, useMemo } from 'react'

const DevPage = (): React.ReactElement => {
  const status: EThemePrefix = EThemePrefix.LIGHT
  const prifix = useMemo(() => {
    return `${EAppIdPrefix.MX_ONE}-${status}-${EModulePrefix.COMPONENT}`
  }, [])

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
