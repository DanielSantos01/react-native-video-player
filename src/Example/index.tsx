import { AppRegistry } from 'react-native';
import VideoPlayers from 'react-native-video-players';

import { Container } from './styles';

const VideoExample: React.FC = () => {
  const uri: string = 'https://your-url.com/video.mp4';
  const paused: boolean = true;

  return (
    <Container>
      <VideoPlayers
        source={{ uri }}
        title='Video title'
        paused={paused}
        resizeMode='contain'
        playInBackground={true}
        playWhenInactive={true}
        controlTimeout={2000}
      />
    </Container>
  )
}

AppRegistry.registerComponent('VideoExample', () => VideoExample);
