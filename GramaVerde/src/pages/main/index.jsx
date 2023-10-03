import { View, Text } from "react-native-animatable";
import { StyleSheet } from "react-native";


export default function Main() {
    return (
        <View
        style={styles.container}
        >
            <View
            style={styles.cabeçalho}
            >
                
            </View>
            <View>

              <Text
            style={styles.saidas}
            >
                  Saídas
                </Text>
            </View>
            
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
        marginTop: 12,
        paddingTop: 85,
        paddingBottom:2,
        paddingLeft: 35,
        paddingRight: 35,
        backgroundColor: '#3E3E3E',
        borderColor: '#9DD08E',
        borderRadius: 5
    }
  });