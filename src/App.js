import React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import DATA_MUSIC from './music-data.json';
import SongCard from './components/SongCard';

const App = () => {

  const renderSong = ({ item }) => <SongCard song={item} />
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={DATA_MUSIC}
          renderItem={renderSong}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0'
  },
})

export default App;