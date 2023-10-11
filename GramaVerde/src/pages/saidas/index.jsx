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
              <TouchableOpacity
              style={styles.saídasBtn}
              >
                <Text>Saídas</Text>
              </TouchableOpacity>
            </View>
        </View>
    )
    }





const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#292832',
      alignItems: 'center',
    },
    cabeçalho:{
        flex: 1,
        width: '200%',
        maxHeight: '25%',
        backgroundColor: '#9DD08E',
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: 'center',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    saídasBtn:{
      backgroundColor: '#00AF04',
      paddingLeft: 200,
      paddingRight: 50,
      paddingBottom: 20,
      paddingTop:20,
      borderRadius: 20
    }
})