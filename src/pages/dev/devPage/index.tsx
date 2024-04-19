import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native'
import styles from '../../../theme/app.scss'
import { EAppIdPrefix, EModulePrefix } from '../../../theme/config'
import { Fragment } from 'react'

const PREFIX = `${EAppIdPrefix.MX_ONE}-${EModulePrefix.COMPONENT}`
const DevPage = (): React.ReactElement => {
  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles[`${PREFIX}-text`]}>123</Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

export default DevPage
