import React from 'react'
import { StyleSheet } from 'react-native'
import Colors from '../../../constants/Colors'

export default HomeScreenStyle = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1
  },
  tabNav: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 25,
  },
  tabNavText: {
    color: 'grey',
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  tabNavTextActive: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: '500'
  },
  lines: {
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  dancerCom: {
    marginTop: 20,
  },
  brandConDescription: {
    color: '#e1e3e4',
    fontWeight: '100',
    textAlign: 'left',
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 30
  },
  footer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    paddingBottom: 48
  }
})