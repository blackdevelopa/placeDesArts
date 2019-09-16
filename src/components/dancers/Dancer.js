import React from 'react'
import { View, Text, Image } from 'react-native'
import DancerStyle from './DancerStyles'

const Dancer = ({ name }) => {
  return (
    <View style={DancerStyle.container}>
      <Image
        source={{ uri: 'https://source.unsplash.com/random'}}
        style={DancerStyle.imageCon}
      />
      <View>
        <Text style={DancerStyle.name}>{name}</Text>
        <Text style={DancerStyle.description}>{name}</Text>        
      </View>
    </View>
  )
}

export default Dancer;