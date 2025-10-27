import { View, Text } from 'react-native'
import React from 'react'
import Svg, { Circle } from 'react-native-svg'

type RingProgressProp = {
    radius?: number;
    strokeWidth?: number
}

const color = "#EE0F55"

const RingProgress = ({
    radius = 100, 
    strokeWidth = 35}
    : RingProgressProp) => {
    const innerRadius = radius - strokeWidth/2;
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
            strokeWidth={strokeWidth} 
            stroke={color} 
            opacity={0.3}
            />
            {/* Foreground */}
            <Circle 
            r={innerRadius} 
            cx={radius} 
            cy={radius} 
            originX={radius}
            originY={radius}
            // fill={'blue'}  
            strokeWidth={strokeWidth} 
            stroke={color} 
            strokeDasharray={[circumference * 0.2, circumference]}
            strokeLinecap='round'
            rotation="-90"
            />
        </Svg>
    </View>
  )
}

export default RingProgress