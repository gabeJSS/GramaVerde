import { StyleSheet, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Perfil() {
    const navigation = useNavigation()
    return (
        <View
        style={styles.container}
        >
            <View
            style={styles.fundo}
            >
                <TouchableOpacity
        style={styles.click2}
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
        backgroundColor: '#292832',
        alignItems: 'center',
        justifyContent: 'center'
    },
    fundo:{
        flex:1,
        width: '84.21%',
        maxHeight: 750,
        backgroundColor: '#9DD08E',
        borderRadius: 40,
    },
    voltar:{
        alignSelf: 'flex-end',
        
    },
  })