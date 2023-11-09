import { Text } from 'react-native';
const listaSaidas = [
    {
      id: 1,
      label: 'Conta de Água',
      value: 129.38,
      date: "15/11/2023",
      numero: 1,
      type: 0 //saídas
    },
    {
      id: 2,
      label: 'Conta de Energia',
      value: 184.21,
      date: "06/12/2023",
      numero: 1,
      type: 0 //saídas
    },
    {
      id: 3,
      label: 'Conta de Internet',
      value: 109.9,
      date: "15/11/2023",
      numero: 1,
      type: 0 //saídas
    }
  ]

export default function Soma_array() {
        var total = listaSaidas.reduce(calculate, 0);
            function calculate(total, item) {
                    return total + (item.value * item.numero); // ideia que deu errado mas uma hora eu tento: colocar um if verificando se type=1 não somar
            }
            return(
                <Text>{total}</Text>
            ) 
        }
       

