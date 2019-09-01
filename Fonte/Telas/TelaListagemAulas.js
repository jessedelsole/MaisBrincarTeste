import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Video } from 'expo-av';
import ItemListaVideo from '../Componentes/ItemListaVideo';
export default class TelaListagemAulas extends React.Component {

  state = {
    videoUri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4'

  }

  render() {
    return (
      <View style={styles.container}>
        <Video
          source={{ uri: this.state.videoUri }}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay={false}
          isLooping
          useNativeControls
          style={{ width: '100%', height: 300 }} />

        <FlatList
          style={{ flex: 1 }}
          data={this.props.navigation.getParam('curso').aulas}
          keyExtractor={(item, index) => { return index.toString() }}
          renderItem={({ item, index }) =>
            <ItemListaVideo titulo={item.titulo} descricao={item.descricao}
              onPress={() => {
                videoUri = 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
                this.setState({ videoUri })

              }} />}
        />
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
});
