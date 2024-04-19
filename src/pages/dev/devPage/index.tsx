import { SafeAreaView, ScrollView, StatusBar, Text } from 'react-native'
import styles from './styles.scss'
import { Fragment } from 'react'

const DevPage = (): React.ReactElement => {
  return (
    <Fragment>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Text style={styles.text}>123</Text>
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  )
}

export default DevPage
