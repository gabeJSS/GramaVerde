import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function Cadastro() {
    const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
        'Inter-ExtraBold': require('../../assets/fonts/Inter-ExtraBold.ttf'),
        'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
    });
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/leaf.png')}
                style={styles.img}
            />
            <View
                style={styles.fundo}>
                <Text style={styles.Titulo}>Cadastro</Text>
                <TextInput
                    style={styles.containerInput}
                    placeholder='Email'
                    placeholderTextColor={'#9DD08E'} />
                <TextInput
                    style={styles.containerInput}
                    placeholder='Senha'
                    placeholderTextColor={'#9DD08E'}
                />
                <TextInput
                    style={styles.containerInput}
                    placeholder='Confirmar senha'
                    placeholderTextColor={'#9DD08E'}
                />
                <TouchableOpacity style={styles.Botao}
                    onPress={() => navigation.navigate('Perguntas0')}
                >
                    <Text style={styles.textobotao}> Criar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.click}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Image
                        source={require('../../assets/voltar.png')}
                        style={styles.voltar}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Titulo: {
        fontSize: 52,
        color: '#9DD08E',
        marginTop: 35,
        backgroundColor: '#292832',
        borderRadius: 50,
        paddingLeft: 25,
        paddingRight: 26,
        paddingBottom: 20,
        paddingTop: 10,
        fontFamily: 'Inter-ExtraBold'
    },
    voltar: {
        width: 55,
        height: 55,
    },
    click: {
        marginTop: 120,
        marginRight: 320
    },
    fundo: {
        flex: 1,
        width: '84.88%',
        maxHeight: '60%',
        backgroundColor: '#9DD08E',
        borderRadius: 54,
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
    },
    Botao: {
        backgroundColor: '#292832',
        color: '#597052',
        borderRadius: 57,
        marginTop: 25,
        alignItems: 'center',
        paddingRight: 30,
        paddingLeft: 30,
        paddingBottom: 3,
        paddingTop: 3,
    },
    container: {
        flex: 1,
        backgroundColor: '#292832',
    },
    containerInput: {
        backgroundColor: "#292832",
        color: '#9DD08E',
        width: '80%',
        borderRadius: 20,
        marginTop: 40,
        paddingLeft: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    img: {
        width: '15%',
        height: '6.85%',
        alignSelf: 'center',
        marginTop: 65
    },
    textobotao: {
        fontSize: 30,
        paddingRight: 10,
        paddingLeft: 3,
        color: '#9DD08E',
        fontFamily: 'Inter-ExtraBold'
    }
})