/* import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SeuComponente = () => {
  const [seuArray, setSeuArray] = useState([]);

  useEffect(() => {
    const carregarDados = async () => {
      try {
        const dadosString = await AsyncStorage.getItem('@MyApp:entradas');
        const dados = JSON.parse(dadosString);
        if (dados) {
          setSeuArray(dados);
        }
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    };

    carregarDados();
  }, []);

  return (
    <View>
      <Text>Valor do Array:</Text>
      {seuArray.map((item, index) => (
        <Text key={index}>{item}</Text>
      ))}
    </View>
  );
};

export default SeuComponente;
*/