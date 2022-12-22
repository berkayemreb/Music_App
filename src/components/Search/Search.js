import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './Search.styles'

const Search = ({ onSearch }) => {
    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Şarkı İsmine Göre Ara'
                cursorColor='#a0a0a0'
                selectionColor='#c0c0c0'
                onChangeText={onSearch}
            />
        </View>
    )

}

export default Search;