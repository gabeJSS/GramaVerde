import { StyleSheet, Text, View } from "react-native";
import { calculateTotal } from "../projetos";

export default function Number() {
  const gastos = "523,74"
  const saldo = "1296,4"
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.viewSaldo}>
          <Text style={styles.saldoTxt}>Saldo:</Text>
          <Text style={styles.saldo}>R$ {saldo}</Text>
        </View>
        <View style={styles.viewGastos}>
          <Text style={styles.gastosTxt}>Gastos:</Text>
          <Text style={styles.gastos}>{gastos}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  saldoTxt: {
    fontFamily: 'Inter-Medium',
    fontSize: 24
  },
  saldo: {
    color: '#08880B',
    fontFamily: 'Inter-Medium',
    fontSize: 24
  },
  gastos: {
    color: '#ff0404',
    fontFamily: 'Inter-Medium',
    fontSize: 24
  },
  gastosTxt: {
    fontFamily: 'Inter-Medium',
    fontSize: 24
  },
  viewGastos: {
    marginLeft: 200
  }
})