import { View, Text, Image } from "react-native-animatable";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function Orcamento() {
  const navigation = useNavigation()
  const [fontsLoaded] = useFonts({
    'Inter-SemiBold': require('../../assets/fonts/Inter-SemiBold.ttf')
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
        <TouchableOpacity
          style={styles.saidasBtn}
        >
          <Image
            source={require('../../assets/add.png')}
            style={styles.addImg}
          />
          <Text
            style={styles.saidasTxt}
          >Orçamento</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.click}
        onPress={() => navigation.navigate('Main')}
      >
        <Image
          source={require('../../assets/voltar.png')}
          style={styles.voltar}
        />
      </TouchableOpacity>
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292832',
    alignItems: 'center',
  },
  cabeçalho: {
    flex: 1,
    width: '100%',
    maxHeight: 210,
    backgroundColor: '#9DD08E',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  saidasBtn: {
    marginTop: 10,
    backgroundColor: '#00AF04',
    paddingLeft: 60,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  saidasTxt: {
    marginRight: 30,
    fontSize: 30,
    fontWeight: 'bold',
    shadowColor: '#000',
    fontFamily: 'Inter-SemiBold',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  addImg: {
    width: 65,
    height: 65,
    marginRight: 40
  },
  imgLogo: {
    width: 140,
    height: 20,
    marginLeft: 5,
    marginTop: 5
  },
  click: {
    marginTop: 540,
    marginRight: 320
  },
  voltar: {
    width: 55,
    height: 55,
  }
})