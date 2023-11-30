import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, Modal, Image, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';

export function calculateTotal(items) {
  return items.reduce((total, item) => total + parseFloat(item.valor), 0).toFixed(2);
}
function AddItemScreen() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ nome: '', valor: '' });
  const [isModalVisible, setModalVisible] = useState(false);

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
  useEffect(() => {
    // Carregar dados do AsyncStorage quando o componente for montado
    loadItemsFromStorage();
  }, []);

  const addItem = () => {
    if (newItem.nome.trim() !== '' && newItem.valor.trim() !== '') {
      setItems([...items, newItem]);
      setNewItem({ nome: '', valor: '' });
      setModalVisible(false);
      saveItemsToStorage([...items, newItem]);
    }
  };

  const loadItemsFromStorage = async () => {
    try {
      const storedItems = await AsyncStorage.getItem('@MyApp:Orcamento');
      if (storedItems !== null) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error loading items from AsyncStorage:', error);
    }
  };

  const saveItemsToStorage = async (itemsToSave) => {
    try {
      await AsyncStorage.setItem('@MyApp:Orcamento', JSON.stringify(itemsToSave));
    } catch (error) {
      console.error('Error saving items to AsyncStorage:', error);
    }
  };

  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    saveItemsToStorage(updatedItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => total + parseFloat(item.valor), 0).toFixed(2);
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
          >Orçamento</Text>
        </TouchableOpacity>
      </View>   
      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
          <FontAwesome name="close" size={24} color="black" onPress={() => setModalVisible(false)} style={styles.fontmaravilhosa}/>
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={newItem.nome}
              onChangeText={(text) => setNewItem({ ...newItem, nome: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Valor (R$)"
              value={newItem.valor}
              onChangeText={(text) => setNewItem({ ...newItem, valor: text })}
              keyboardType="numeric"
            />
            <Button title="Adicionar" onPress={addItem} />
            
          </View>
        </View>
      </Modal>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{`${item.nome}`}</Text>
            <Text>{`Valor: R$${item.valor}`}</Text>
            <Button title="Excluir" onPress={() => removeItem(index)} color="red" />
          </View>
        )}
        style={styles.list}
      />

      <Text style={styles.totalText}>{`Total: R$${calculateTotal()}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#292832'
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  addImg: {
    width: 65,
    height: 65,
    marginRight: 30
  },
  saidasTxt: {
    marginRight: 30,
    fontSize: 30,
    fontFamily: 'Inter-ExtraLight',
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
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  imgLogo: {
    width: 140,
    height: 20,
    marginLeft: 5,
    marginTop: 5
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
    paddingLeft: 40,
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
  listItem: {
    maxWidth: '60%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#00AF04',
    padding: 10,
    borderColor: '#010101',
    borderWidth: 2,
    borderRadius: 5,
  },
  list: {
    marginTop: 20,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default AddItemScreen;
