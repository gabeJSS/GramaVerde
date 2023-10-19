import { View, Text, Image } from "react-native-animatable";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';

export default function Main() {
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
        onPress={() => navigation.navigate('Saidas')}
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
        onPress={() => navigation.navigate('Orcamento')}
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
        onPress={() => navigation.navigate('Entradas')}
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
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292832',
    alignItems: 'center',
  },
  click: {
    marginTop: 330,
    marginRight: 320
  },
  cabeçalho: {
    flex: 1,
    width: '100%',
    maxHeight: '25%',
    backgroundColor: '#9DD08E',
    alignItems: 'baseline',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  voltar: {
    width: 55,
    height: 55,
  },
  saidas: {
    alignItems: "center",
    flex: 1.8,
    width: 98,
    height: 100,
    backgroundColor: '#3E3E3E',
    paddingBottom: 15,
    borderRadius: 5
  },
  fundo0: {
    alignItems: "center",
    marginTop: 15,
    marginLeft: -240,
    width: 100,
    height: 100,
    padding: 1,
    backgroundColor: '#9DD08E',
    borderRadius: 5,
  },
  fundo1: {
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
  fundo2: {
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
  fundo3: {
    marginTop: 15,
    width: 275,
    height: 85,
    padding: 1,
    backgroundColor: '#9DD08E',
    borderRadius: 5
  },
  projeto: {
    alignItems: "center",
    justifyContent: 'center',
    flex: 1.8,
    width: 273,
    height: 100,
    backgroundColor: '#3E3E3E',
    paddingBottom: 15,
    borderRadius: 5,
    flexDirection: 'row'
  },
  barcode: {
    marginTop: 14,
    width: 60,
    height: 50,
  },
  cifrao: {
    marginTop: 10,
    width: 80,
    height: 60,
  },
  subindo: {
    marginTop: 10,
    width: 65,
    height: 55,
  },
  notepad: {
    marginTop: 15,
    width: 60,
    height: 60,
  },
  imgLogo: {
    width: 140,
    height: 20,
    marginTop: 5,
    marginLeft: 4
  },
  Titulo: {
    fontSize: 24,
    color: '#3E3E3E',
    marginTop: 10,
    marginLeft: 3,
    fontFamily: 'Inter-SemiBold'
  },
  textoSaida: {
    marginTop: 13,
    color: '#fff',
    fontFamily: 'Inter-Bold'
  },
  textoEntrada: {
    marginTop: 12,
    color: '#fff',
    fontFamily: 'Inter-Bold'
  },
  textoOrcamento: {
    marginTop: 8,
    color: '#fff',
    fontFamily: 'Inter-Bold'
  },
  textoProjeto: {
    marginLeft: 10,
    marginTop: 13,
    fontSize: 34,
    color: '#fff',
    fontFamily: 'Inter-Bold'
  },
  proximaConta: {
    fontSize: 18,
    color: '#3E3E3E',
    marginLeft: 3,
    fontFamily: 'Inter-SemiBold'
  },
  validadeConta: {
    fontSize: 18,
    color: '#3E3E3E',
    marginLeft: 3,
    marginTop: 5,
    fontFamily: 'Inter-SemiBold'
  },
  saldo: {
    fontSize: 24,
    color: '#3E3E3E',
    marginTop: 10,
    fontFamily: 'Inter-SemiBold',
    marginLeft: 250,
  },

})