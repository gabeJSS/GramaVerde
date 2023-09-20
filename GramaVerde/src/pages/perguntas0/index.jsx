import { StyleSheet, Text, TextInput, TouchableOpacity, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export default function perguntas0() {
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
        <Text> OOOOpa </Text>
        </View>
    )
    

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  



