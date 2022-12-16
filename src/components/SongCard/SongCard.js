import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./SongCard.style";

const SongCard = ({ song }) => {

    return (
        <View style={styles.container}>
            <Image style={styles.image} />
            <View style={styles.inner_container}>
                <Text style={styles.title}> {song.title} </Text>
                <View style={styles.info_container}>
                    <Text style={styles.artist}> {song.artist} </Text>
                    <Text style={styles.year}> {song.year} </Text>
                </View>
            </View>
        </View>
    )
}

export default SongCard;