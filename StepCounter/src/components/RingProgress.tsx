import { View, Text } from 'react-native'
import React from 'react'

type RingProgressProp = {
    radius?: number;
}

const color = "#EE0F55"

const RingProgress = ({radius = 100}: RingProgressProp) => {
  return (
    <View style={{ width: radius * 2, height: radius * 2, backgroundColor: color, alignSelf: 'center' }}>
      <Text style={{color: 'white'}}>RingProgress</Text>
    </View>
  )
}

export default RingProgress