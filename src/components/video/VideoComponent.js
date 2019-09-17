import React, { Component } from 'react'
import { View } from 'react-native'
import Video from 'react-native-video'
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls'
import VideoStyles from './VideoStyles'

class VideoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: 0,
      duration: 0,
      isFullScreen: false,
      isLoading: true,
      paused: false,
      playerState: PLAYER_STATES.PLAYING,
      screenType: 'cover'
    };
  }

  onSeek = seek => {
    this.videoPlayer.seek(seek);
  };

  onPaused = playerState => {
    this.setState({
      paused: !this.state.paused,
      playerState,
    });
  };

  onReplay = () => {
    this.setState({
      playerState: PLAYER_STATES.PLAYING
    });
    this.videoPlayer.seek(0);
  };

  onProgress = data => {
    const { isLoading, playerState } = this.state;
    if(!isLoading && playerState !== PLAYER_STATES.ENDED) {
      this.setState({
        currentTime: data.currentTime
      });
    }
  };

  onLoad = data => this.setState({
    duration: data.duration, isLoading: false
  })

  onLoadStart = data => this.setState({ isLoading: true });

  onEnd = () => this.setState({ playerState: PLAYER_STATES.ENDED });

  onError = () => alert('oh! ', error);

  exitFullScreen = () => {
    alert('Exit full screen');
  };
  
  enterFullScreen = () => {};
  
  onFullScreen = () => {
    if (this.state.screenType == 'content')
      this.setState({ screenType: 'cover' });
    else this.setState({ screenType: 'content' });
  };

  onSeeking = currentTime => this.setState({ currentTime });
 
  render() {
    return (
      <View style={VideoStyles.container}>
        <Video
          onEnd={this.onEnd}
          onLoad={this.onLoad}
          onLoadStart={this.onLoadStart}
          onProgress={this.onProgress}
          paused={this.state.paused}
          ref={videoPlayer => (this.videoPlayer = videoPlayer)}
          resizeMode={this.state.screenType}
          onFullScreen={this.state.isFullScreen}
          source={{ uri: 'https://random123random124.s3.eu-central-1.amazonaws.com/Ballerina%20Short%20Clip.mp4' }}
          style={VideoStyles.mediaPlayer}
          volume={2}
        />
        <MediaControls
          duration={this.state.duration}
          isLoading={this.state.isLoading}
          mainColor="#333"
          onFullScreen={this.onFullScreen}
          onPaused={this.onPaused}
          onReplay={this.onReplay}
          onSeek={this.onSeek}
          onSeeking={this.onSeeking}
          playerState={this.state.playerState}
          progress={this.state.currentTime}
        />
      </View>
    );
  }
}

export default VideoComponent;