import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar
                hidden={true} />
            <TouchableOpacity>
                <PokemonImage />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const PokemonImage = () => {
    return (
        <Image
            style={{
                width: 64,
                height: 64,
                resizeMode: 'stretch',
            }}
            source={{
                uri: 'https://raw.githubusercontent.com/Clarence161095/clarence161095.github.io/master/assets/data/pokedev/animated/130.gif',
            }} />
    )
}