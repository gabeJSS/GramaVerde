import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable'
import { View } from "react-native-animatable";
import Objects from '../main/objects';

export default function Login() {
    const navigation = useNavigation()
    const [fontsLoaded] = useFonts({
        'Inter-Black': require('../../assets/fonts/Inter-Black.ttf'),
        'Inter-Bold': require('../../assets/fonts/Inter-Bold.ttf'),
        'Inter-ExtraBold': require('../../assets/fonts/Inter-ExtraBold.ttf'),
        'Inter-ExtraLight': require('../../assets/fonts/Inter-ExtraLight.ttf'),
        'Inter-Medium': require('../../assets/fonts/Inter-Medium.ttf'),
        'Inter-Regular': require('../../assets/fonts/Inter-Regular.ttf'),
        'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf'),
        'Inter-Thin': require('../../assets/fonts/Inter-Thin.ttf'),
      });
    return(
        <View style={styles.container}
        animation="fadeIn"
        >
            <Animatable.Image
                
                source={require('../../assets/leaf.png')}
                style={styles.img}
            />
            <View
                style={styles.fundo}>
                <Text style={styles.Titulo}>Login</Text>
                <TextInput
                    style={styles.containerInput}
                    placeholder='Email'
                    placeholderTextColor={'#9DD08E'} />
                <TextInput
                    style={styles.containerInput}
                    placeholder='Senha'
                    placeholderTextColor={'#9DD08E'}
                    secureTextEntry={true}
                    maxLength={50}
                />
                <TouchableOpacity style={styles.Botao}
                    onPress={() => navigation.navigate('Main')}>
                    <Text style={styles.textobotao}>Entrar</Text>
                </TouchableOpacity>
                <Text style={styles.textocadastro2}>Não tem uma conta?</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Cadastro')}
                >
                    <Text style={styles.textocadastro}>Cadastre-se!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Titulo: {
        fontSize: 52,
        fontFamily: 'Inter-ExtraBold',
        color: '#9DD08E',
        marginTop: 35,
        backgroundColor: '#292832',
        borderRadius: 50,
        paddingLeft: 50,
        paddingRight: 50,
        paddingBottom: 20,
        paddingTop: 10,
    },
    fundo: {
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
        justifyContent: 'center',
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
        width: 82,
        height: 80,
        marginTop: 65
    },
    textobotao: {
        fontSize: 30,
        paddingRight: 7,
        paddingLeft: 3,
        paddingBottom: 2,
        color: '#9DD08E',
        fontFamily: 'Inter-Black'
    },
    textocadastro: {
        fontSize: 15,
        marginTop: 3,
        fontFamily: 'Inter-Black'
    },
    textocadastro2: {
        fontSize: 15,
        marginTop: 10,
        fontFamily: 'Inter-Black'
    }
})