import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useFonts } from 'expo-font';

export default function Movimentamento({data}) {
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
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                <Text>{data.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 24,
        borderBottomWidth: 10,
        borderBottomColor: '#292832',
        backgroundColor: '#61B648',
    },
    content:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    date:{
        fontFamily:'Inter-ExtraBold'
    },
    label:{
        fontFamily: 'Inter-Regular'
    }
})