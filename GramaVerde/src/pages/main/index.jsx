import { View, Text } from "react-native-animatable";
import { StyleSheet, TouchableOpacity } from "react-native";
import {apply} from '../../theme/styles'


export default function Main() {
    return (
        <View
        style={styles.container}
        >
            <View
            style={styles.cabeçalho}
            >
            </View>
            <TouchableOpacity
            style={styles.fundo}
            >
              <View
            style={styles.saidas}
            >

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
      justifyContent: 'center',
    },
    cabeçalho:{
        flex: 1,
        width: '100%',
        marginTop: -577.5 ,
        maxHeight: '25%',
        backgroundColor: '#9DD08E',
        alignItems: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    saidas:{
        width: 195,
        backgroundColor: '#3E3E3E'
        
  },
  fundo:{
    width: 200,
  }
})