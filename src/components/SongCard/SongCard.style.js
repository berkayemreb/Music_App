import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default StyleSheet.create({
    container: {
        padding: 10,
        flexDirection: 'row',
    },
    image: {
        width: windowWidth / 4,
        height: windowHeight / 8,
        borderRadius: 50,
    },
    inner_container: {
        justifyContent: 'center',
        flex: 1, /* flex: 1 vermezsek eğer containerin içindeki içerik kadar yer kaplar ve taşmalar olabilir. bunu önüne geçmek için hepsini tamamen yer kaplat ki taşma olmasın*/
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    info_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    artist: {
        fontSize: 18,
    },
    year: {
        fontSize: 12,
        color: '#a0a0a0',
        top: 1.5
    },
    populerContainer: {
        borderWidth: 1,
        borderColor: "#b61919",
        borderRadius: 9,
        marginLeft: "auto",
        padding: 6,
    },
    populerText: {
        color: "#b61919"
    }
})