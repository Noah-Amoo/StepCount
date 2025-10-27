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
    strokeWith = 30}
    : RingProgressProp) => {
    const innerRadius = radius - strokeWith/2;
    const circumference = 2 * Math.PI * innerRadius

    return (
        <View style={{ 
            width: radius * 2, 
            height: radius * 2,  
            alignSelf: 'center',
            // backgroundColor: 'green',
        }}>
        <Svg>
            {/* Background */}
            <Circle 
            cx={radius} 
            cy={radius} 
            r={innerRadius} 
            // fill={'blue'}  
            strokeWidth={strokeWith} 
            stroke={color} 
            opacity={0.3}
            />
            {/* Foreground */}
            <Circle 
            cx={radius} 
            cy={radius} 
            r={innerRadius} 
            // fill={'blue'}  
            strokeWidth={strokeWith} 
            stroke={color} 
            strokeDasharray={[circumference * 0.5, circumference]}
            />
        </Svg>
    </View>
  )
}

export default RingProgress