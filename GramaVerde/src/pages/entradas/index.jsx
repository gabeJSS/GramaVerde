import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Entradas() {
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
  return (
      <View style={styles.container}>
        <View style={styles.cabeçalho}>
        <Image
              source={require('../../assets/logo.png')}
              style={styles.imgLogo}
              />
            <View style={styles.icone}>
                <Text style={styles.textoIcone}>Entradas</Text>
            </View>
        </View>
        <View style={styles.saidasBtn}>
            <Text style={styles.texto}>
               R$7.500,00 
            </Text>
            <Text style={styles.texto}>
                Salário
            </Text>
        </View>
        <View style={styles.saidasBtn}>
            <Text style={styles.texto}>
               R$7.500,00 
            </Text>
            <Text style={styles.texto}>
                Salário
            </Text>
        </View>
        <View style={styles.saidasBtn}>
            <Text style={styles.texto}>
               R$7.500,00 
            </Text>
            <Text style={styles.texto}>
                Salário
            </Text>
        </View>
        <View style={styles.saidasBtn}>
            <Text style={styles.texto}>
               R$7.500,00 
            </Text>
            <Text style={styles.texto}>
                Salário
            </Text>
        </View>
        <View
        style={styles.click}
        >
        <TouchableOpacity
        onPress={() => navigation.navigate('Main')}
        >
              <Image
            source={require('../../assets/voltar.png')}
            style={styles.voltar}
            />
            </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#292832'
    },
    texto:{
        fontFamily: 'Inter-Black'
    },
    cabeçalho:{
        flexBasis: 190,
        width: '100%',
        backgroundColor: '#9DD08E',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    click:{
        marginTop: 85,
        alignSelf: 'flex-start',
        marginLeft: 10
    },
    voltar:{
        width: 55,
        height: 55,
      },
    icone:{
        marginTop: 24,
        flexBasis: 100,
        width: 320,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#00AF04',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 3,
    },
    textoIcone:{
        fontSize: 30,
        fontFamily: 'Inter-SemiBold'
    },
    imgLogo:{
        width: 140,
        height: 20,
        marginTop:5,
        marginLeft:4
      },
      saidasBtn:{
        marginTop:40,
        backgroundColor: '#61B648',
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 20,
        paddingTop: 20,
        borderRadius: 20,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
      shadowOffset:{
        width:0,
        height:2
      },
    },

})