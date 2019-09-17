import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from './DancerStyles'

const Dancer = ({ name, description, image }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `${image}`}}
        style={styles.imageCon}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>        
      </View>
    </View>
  )
}

export default Dancer;