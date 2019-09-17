import React from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import styles from './HomeScreenStyles'
import Dancer from '../../components/dancers/DancerComponent'
import VideoComponent from '../../components/video/VideoComponent'

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <VideoComponent />
      <View style={styles.brandCon}>
        <View style={styles.tabNav}>
          <Text style={styles.tabNavText}>Show Details</Text>
          <Text style={styles.tabNavTextActive}>Our Dancers</Text>
          <View style={styles.lines} />
        </View>
        <Text style={styles.brandConDescription}>
          What audiences connect with is the human element in the stoty: love and betrayal in love, is a common, enduring theme.
        </Text>
      </View>
      <ScrollView style={styles.dancerCom}>
        <Dancer
          image='https://images.unsplash.com/photo-1564658786419-edcf7895a620'
          name='Hettie Griffin'
          description='In Hettles famous extended mad scene, she cites the ballerinas reading'
        />
        <Dancer
          image='https://images.unsplash.com/photo-1564658786419-edcf7895a620'
          name='Hettie Griffin'
          description='In Hettles famous extended mad scene, she cites the ballerinas reading'
        />
        <Dancer
          image='https://images.unsplash.com/photo-1564658786419-edcf7895a620'
          name='Hettie Griffin'
          description='In Hettles famous extended mad scene, she cites the ballerinas reading'
        />
        <Dancer
          image='https://images.unsplash.com/photo-1564658786419-edcf7895a620'
          name='Hettie Griffin'
          description='In Hettles famous extended mad scene, she cites the ballerinas reading'
        />
        <Dancer
          image='https://images.unsplash.com/photo-1564658786419-edcf7895a620'
          name='Hettie Griffin'
          description='In Hettles famous extended mad scene, she cites the ballerinas reading'
        />
      </ScrollView>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footerText}>Buy Tickets</Text>
      </TouchableOpacity>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null
};

export default HomeScreen;