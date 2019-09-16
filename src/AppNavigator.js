import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './screens/homeScreen/HomeScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen
});

export default createAppContainer(AppNavigator)