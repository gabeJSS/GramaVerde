import { View, Text, Image } from "react-native-animatable";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function Saidas(){
    const navigation = useNavigation()
    return (
        <View
        style={styles.container}
        >
            <View
            style={styles.cabeçalho}
            >
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
            </View>
    )
    }





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#292832',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cabeçalho:{
        flex: 1,
        width: '200%',
        marginTop: -577.5 ,
        maxHeight: '30%',
        backgroundColor: '#9DD08E',
        alignItems: 'center',
        borderRadius: 20,
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
    borderRadius: 5
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
    borderRadius: 5
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
  Titulo: {
    fontSize: 24,
    color: '#3E3E3E',
    marginTop: 110,
    marginRight: 150,
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
proximaConta: {
  fontSize: 18,
  color: '#3E3E3E',
  marginRight: 246,
},
validadeConta: {
  fontSize: 18,
  color: '#3E3E3E',
  marginRight: 150,
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