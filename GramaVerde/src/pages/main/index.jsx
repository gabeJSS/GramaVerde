import { View, Text, Image } from "react-native-animatable";
import { StyleSheet, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from '@react-navigation/native';

export default function Main() {
    const navigation = useNavigation()
    return (
        <View
        style={styles.container}
        >
            <View
            style={styles.cabeçalho}
            >
              <Image
              source={require('../../assets/logo.png')}
              style={styles.imgLogo}
              />
              <Text 
              style={styles.Titulo}
              >
              Próximo vencimento
              </Text>
              <Text
              style={styles.proximaConta}>
              (próxima conta)
              </Text>
              <Text
              style={styles.validadeConta}>
                (quando que a conta vence)
              </Text>
              <Text
              style={styles.saldo}>
                (saldo aqui)
              </Text>
            </View>
            <TouchableOpacity
            style={styles.fundo0}
            onPress={ () => navigation.navigate('Saidas')}
            >
              <View
            style={styles.saidas}
            >
            <Image
            source={require('../../assets/barcode.png')}
            style={styles.barcode}
            />
            <Text
            style={styles.textoSaida}
            >
              Saídas
            </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.fundo1}
            
            >
              <View
            style={styles.saidas}
            >
            <Image
            source={require('../../assets/cifrao.png')}
            style={styles.cifrao}
            />
            <Text
            style={styles.textoOrcamento}
            >
              Orçamento
            </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.fundo2}
            
            >
              <View
            style={styles.saidas}
            >
            <Image
            source={require('../../assets/entrada.png')}
            style={styles.subindo}
            />
            <Text
            style={styles.textoEntrada}
            >
              Entradas
            </Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.fundo3}
            
            >
              <View
            style={styles.projeto}
            >
            <Image
            source={require('../../assets/notepad.png')}
            style={styles.notepad}
            />
            <Text
            style={styles.textoProjeto}
            >
              Projetos
            </Text>
            </View>
            </TouchableOpacity>
        </View>
    );
  }



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#292832',
      alignItems: 'center',
    },
    cabeçalho:{
        flex: 1,
        width: '100%',
        maxHeight: '25%',
        backgroundColor: '#9DD08E',
        alignItems: 'baseline',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    saidas:{
        alignItems: "center",
        flex: 1.8,
        width: 98,
        height: 100,
        backgroundColor: '#3E3E3E',
        paddingBottom: 15,
        borderRadius: 5
  },
  fundo0:{
    alignItems: "center",
    marginTop: 15,
    marginLeft: -240,
    width: 100,
    height: 100,
    padding: 1,
    backgroundColor: '#9DD08E',
    borderRadius: 5,
  },
  fundo1:{
    alignItems: "center",
    marginTop: -100,
    marginLeft: 10,
    marginRight: 10,
    width: 100,
    height: 100,
    padding: 1,
    backgroundColor: '#9DD08E',
    borderRadius: 5,
    },
  fundo2:{
    alignItems: "center",
    marginTop: -100,
    marginLeft: 250,
    marginRight: 10,
    width: 100,
    height: 100,
    padding: 1,
    backgroundColor: '#9DD08E',
    borderRadius: 5
  },
  fundo3:{
    alignItems: "center",
    marginTop: 15,
    width: 275,
    height: 85,
    padding: 1,
    backgroundColor: '#9DD08E',
    borderRadius: 5
  },
  projeto:{
    alignItems: "center",
    flex: 1.8,
    width: 273,
    height: 100,
    backgroundColor: '#3E3E3E',
    paddingBottom: 15,
    borderRadius: 5
  },
  barcode:{
    marginTop: 14,
    width: 60,
    height: 50,
  },
  cifrao:{
    marginTop: 10,
    width: 80,
    height: 60,
  },
  subindo:{
    marginTop: 10,
    width: 65,
    height: 55,
  },
  notepad:{
    marginTop: 12,
    marginRight: 150,
    width: 60,
    height: 60,
  },
  imgLogo:{
    width: 140,
    height: 20,
    marginTop:5,
    marginLeft:4
  },
  Titulo: {
    fontSize: 24,
    color: '#3E3E3E',
    marginTop: 10,
    marginLeft:3,
    fontWeight: 'bold'
},
textoSaida: {
    marginTop: 13,
    color:'#fff'
},
textoEntrada:{
    marginTop: 12,
    color:'#fff'
 },
textoOrcamento: {
    marginTop: 8,
    color:'#fff'
},
textoProjeto: {
    fontSize: 34  ,
    color: '#fff',
    marginLeft: 70,
    marginTop: -56,
    fontWeight: 'bold',
},
proximaConta: {
    fontSize: 18,
    color: '#3E3E3E',
    marginLeft:3
},
validadeConta: {
    fontSize: 18,
    color: '#3E3E3E',
    marginLeft:3,
    marginTop: 5,
},
saldo: {
    fontSize: 24,
    color: '#3E3E3E',
    marginTop: 10,
    fontWeight: 'bold',
    marginLeft: 250,
},

})