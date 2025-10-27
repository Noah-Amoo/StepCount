import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle } from 'react-native-svg'

type RingProgressProp = {
    radius?: number;
    strokeWith?: number
}

const color = "#EE0F55"

const RingProgress = ({
    radius = 100, 
    strokeWith = 20}
    : RingProgressProp) => {
    const innerCircle = radius - strokeWith/2;

    return (
        <View style={{ 
            width: radius * 2, 
            height: radius * 2,  
            alignSelf: 'center',
            // backgroundColor: 'green',
        }}>
        <Svg>
            <Circle 
            cx={radius} 
            cy={radius} 
            r={innerCircle} 
            // fill={'blue'}  
            strokeWidth={strokeWith} 
            stroke={color} />
        </Svg>
    </View>
  )
}

export default RingProgress