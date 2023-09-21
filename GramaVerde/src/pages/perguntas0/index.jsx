import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function perguntas0() {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Image 
        source={require('../../assets/leaf.png')}
        style={styles.img}
        />
            <View style={styles.fundo}>
            <Text style={styles.Texto} > Faremos algumas 
perguntas sobre sua vida financeira para aprimorar nossas capacidades de te auxiliar. </Text>
            </View>
            <TouchableOpacity style={styles.Botao}
            onPress={ () => navigation.navigate('Perguntas1')}>
                <Text style={styles.textobotao}> Vamos lá! </Text>
            </TouchableOpacity>
            
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
      maxHeight: '40%',
      backgroundColor: '#9DD08E',
      borderRadius: 54,
      alignItems: 'center'
  },
  Botao: {
      backgroundColor: '#9DD08E',
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
  imgFundo:{
    width: '15%',
    height: '8%',
    marginTop: 65,
},
  textobotao: {
      fontSize:30,
      paddingRight: 10,
      paddingLeft:3,
      color: '#292832',
      fontWeight: 'bold'
  },
  Texto: {
    fontSize: 35,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    paddingTop: 15,
    fontWeight: 'bold',
    fontFamily: 'Inter-Black',
    marginTop: 5.5
  }
})



