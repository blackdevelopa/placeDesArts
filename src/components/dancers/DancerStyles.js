import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import Colors from '../../../constants/Colors'

let deviceWidth = Dimensions.get('window').width

export default dancerStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  imageCon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    marginHorizontal: 10
  },
  content: {
    paddingRight: 40,
    paddingLeft: 8,
    paddingBottom: 12,
    width: deviceWidth - 50,
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    color: Colors.white,
    paddingBottom: 5,
  },
  description: {
    fontSize: 11,
    color: 'grey',
    letterSpacing: 1
  }
})