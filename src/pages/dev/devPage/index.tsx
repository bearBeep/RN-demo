import { SafeAreaView, ScrollView } from 'react-native';
import { Box, Text } from "../../../components"

import React from 'react';

const DevPage = (): React.ReactElement => {
  return (
    <>
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Box
            margin="m"
            padding={{ smallPhone: 'xs', phone: 's', tablet: 'm' }}
            backgroundColor="primary"
            style={{
              width: 200,
              height: 200,
            }}
          >
            <Text style={{}} variant="header" color="success">123</Text>
          </Box>

        </ScrollView>
      </SafeAreaView>
    </>

  )
}

export default DevPage

