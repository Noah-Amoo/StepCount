import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle } from 'react-native-svg'

type RingProgressProp = {
    radius?: number;
}

const color = "#EE0F55"

const RingProgress = ({radius = 100}: RingProgressProp) => {
  return (
    <View style={{ 
        width: radius * 2, 
        height: radius * 2,  
        alignSelf: 'center',
    }}>
        <Svg>
            <Circle cx={radius} cy={radius} r={radius} fill={color} />
        </Svg>
    </View>
  )
}

export default RingProgress