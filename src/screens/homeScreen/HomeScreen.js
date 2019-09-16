import React from 'react'
import { View, Text, StatusBar } from 'react-native'
import HomeScreenStyle from './HomeScreenStyles'
import Dancer from '../../components/dancers/Dancer'
import VideoComponent from '../../components/video/VideoComponent'

const HomeScreen = () => {
  return (
    <View>
      <VideoComponent />
      <Text style={HomeScreenStyle.text}>Home Screen Top</Text>
      <StatusBar barStyle="dark-content" />
      <Text style={HomeScreenStyle.text}>Home Screen</Text>
      <Dancer name='mike'/>
    </View>
  );
}

export default HomeScreen;