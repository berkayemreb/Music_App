import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, FlatList, Text } from 'react-native';
import DATA_MUSIC from './music-data.json';
import SongCard from './components/SongCard';
import Search from './components/Search'

const App = () => {

  const [list, setList] = useState(DATA_MUSIC);

  const renderSong = ({ item }) => <SongCard song={item} />
  const renderSeperator = () => <View style={styles.seperator} />

  const handleSearch = (text) => {
    const filteredList = DATA_MUSIC.filter(song => {
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.includes(searcedText);
    })

    setList(filteredList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Search onSearch={handleSearch} />
      <FlatList
        data={list}
        renderItem={renderSong}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={renderSeperator} // bu property listedeki elemanları ayırmak için kullanılan bir propdur.  
      />
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
    paddingTop: 30,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#c0c0c0',

  } // neden borderBottomWidth kullanmadık? : çünkü bunu kullansaydık son elemanın altına da border koyardı. Biz sadece elemanların arasına cizgi koymak istedigimiz için ItemSeparatorComponent propertysini kullandık.
})

export default App;