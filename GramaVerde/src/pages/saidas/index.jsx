import React, { useState, useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, Text, Button, TextInput, FlatList, Modal, StyleSheet, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function calculateTotal(items) {
  return items.reduce((total, item) => total + parseFloat(item.valor), 0).toFixed(2);
}

export function Saidas() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ nome: '', valor: '', data: '' });
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Carregar dados do AsyncStorage quando o componente for montado
    loadItemsFromStorage();
  }, []);

  const addItem = () => {
    if (newItem.nome.trim() !== '' && newItem.valor.trim() !== '' && newItem.data.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem({ nome: '', valor: '', data: '' });
      setModalVisible(false);
      saveItemsToStorage([...items, newItem]);
    }
  };

  const loadItemsFromStorage = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('@MyApp:saidas');
      if (storedItems !== null) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error loading items from AsyncStorage:', error);
    }
  };

  const saveItemsToStorage = async (itemsToSave) => {
    try {
      await AsyncStorage.setItem('@MyApp:saidas', JSON.stringify(itemsToSave));
    } catch (error) {
      console.error('deu merda, vê ai:', error);
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    saveItemsToStorage(updatedItems);
  };

  return (
    <View style={styles.container}>
      <View
        style={styles.cabeçalho}
      >
        <Image
          source={require('../../assets/logo.png')}
          style={styles.imgLogo}
        />
        <TouchableOpacity
          style={styles.saidasBtn}
          onPress={() => setModalVisible(true)}
        >
          <Image
            source={require('../../assets/add.png')}
            style={styles.addImg}
          />
          <Text
            style={styles.saidasTxt}
          >Saídas</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <FontAwesome name="close" size={24} color="black" onPress={() => setModalVisible(false)} style={styles.fontmaravilhosa}/>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              placeholderTextColor={'#949399'}
              value={newItem.nome}
              onChangeText={(text) => setNewItem({ ...newItem, nome: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Valor (R$)"
              placeholderTextColor={'#949399'}
              value={newItem.valor}
              onChangeText={(text) => setNewItem({ ...newItem, valor: text })}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Data"
              placeholderTextColor={'#949399'}
              value={newItem.data}
              onChangeText={(text) => setNewItem({ ...newItem, data: text })}
            />
            <TouchableOpacity
                            onPress={addItem}
                        >
                            <Image
                                source={require('../../assets/confirm.png')}
                                style={styles.confirma}

                            />
                        </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text
              style={styles.tituloTxt}
            >{`${item.nome}`}</Text>
            <Text
              style={styles.valorTxt}
            >{`Valor: R$${item.valor}`}</Text>
            <Text
              style={styles.dataTxt}
            >{`${item.data}`}</Text>
            <Button title="Excluir" onPress={() => removeItem(index)} color="red" />
          </View>
        )}
        style={styles.list}
      />

      <Text style={styles.totalText}>{`Total: R$${calculateTotal(items)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292832'
  },
  tituloTxt:{
    fontSize: 24,
    fontFamily: 'Inter-SemiBold'
  },
  fontmaravilhosa:{
    marginBottom:10,
  },
  modalContainer: {
    flex: 1,
    width: 300,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirma: {
    width: 192,
    height: 63
},
  imgLogo: {
    width: 140,
    height: 20,
    marginLeft: 5,
    marginTop: 5
  },
  cabeçalho: {
    flex: 1,
    width: '100%',
    maxHeight: '25%',
    backgroundColor: '#9DD08E',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  saidasBtn: {
    backgroundColor: '#00AF04',
    paddingLeft: 60,
    paddingRight: 30,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 20,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  saidasTxt: {
    marginRight: 30,
    fontSize: 30,
    fontWeight: 'bold',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  addImg: {
    width: 65,
    height: 65,
    marginRight: 40
  },
  modalContent: {
    backgroundColor: '#292832',
    width: '80%',
    padding: 20,
    borderRadius: 30,
    elevation: 5,
    borderColor: 'black',
    borderWidth: 2
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    justifyContent: 'space-between',
    maxWidth: '60%',
    paddingLeft: 50,
    paddingRight: 50,
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#00AF04',
    padding: 10,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 10,
  },
  list: {
    marginTop: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default Saidas;
