import React from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import DATA_MUSIC from './music-data.json';
import SongCard from './components/SongCard';

const App = () => {

  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeperator = () => <View style={styles.seperator} />
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <FlatList
          data={DATA_MUSIC}
          renderItem={renderSong}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeperator} // bu property listedeki elemanları ayırmak için kullanılan bir propdur.  
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
  seperator: {
    borderWidth: 1,
    borderColor: '#c0c0c0',

  } // neden borderBottomWidth kullanmadık? : çünkü bunu kullansaydık son elemanın altına da border koyardı. Biz sadece elemanların arasına cizgi koymak istedigimiz için ItemSeparatorComponent propertysini kullandık.
})

export default App;