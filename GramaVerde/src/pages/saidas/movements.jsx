import { View, StyleSheet, Text, Touchable, TouchableOpacity } from "react-native";

export default function Movimentamento({data}) {
    return(
        <TouchableOpacity style={styles.container}>
            <Text style={styles.date}>{data.date}</Text>
            <View styles={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                <Text style={styles.value}>{data.value}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#dadada'
    }
})