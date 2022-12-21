import React from 'react';
import {View, TextInput} from 'react-native';
import styles from './Search.styles'
const Search = () => {

    return(
        <View style={styles.container}>
            <TextInput 
            placeholder='Ara'
            cursorColor='#b0b0b0'
            />
        </View>
    )

}

export default Search;