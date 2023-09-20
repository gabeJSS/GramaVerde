import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { useFonts } from 'expo-font';

export default function Cadastro() {
    const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('./assets/fonts/Inter-Black.otf'),
    });
    return(
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
        placeholderTextColor={'#9DD08E'}/>
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
        onPress={ () => navigation.navigate('perguntas0')}
        >
        <Text style={styles.textobotao}> Criar</Text>
        </TouchableOpacity>
        </View>
    </View>
    )
}
const styles = StyleSheet.create({
    Titulo: {
        fontSize: 52,
        fontWeight: 'bold',
        color: '#9DD08E',
        marginTop: 35,
        backgroundColor: '#292832',
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 20,
        paddingTop: 10,
    },
    fundo:{
        flex: 1,
        marginTop: 70,
        width: '84.88%',
        maxHeight: '60%',
        backgroundColor: '#9DD08E',
        borderRadius: 54,
        alignItems: 'center'
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
        alignItems: 'center'
    },
    containerInput:{
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
    img:{
        width: '15%',
        height: '6.85%',
        marginTop: 65,
    },
    textobotao: {
        fontSize:30,
        paddingRight: 10,
        paddingLeft:3,
        color: '#9DD08E',
        fontFamily: 'Inter-Black'
    }
})