import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

export default dancerStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    width: 100,
    display: 'flex',
    flexDirection: 'row'
  },
  imageCon: {
    height: 50,
    width: 50,
    borderRadius: 15
  },
  name: {
    fontSize: 15
  },
  description: {
    fontSize: 10
  }
})