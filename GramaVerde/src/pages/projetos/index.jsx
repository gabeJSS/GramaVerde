import React, { useState, useEffect } from 'react';
import { View, Text, Button, TextInput, FlatList, Modal, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesome } from '@expo/vector-icons';

export function calculateTotal(items) {
  return items.reduce((total, item) => total + parseFloat(item.valor), 0).toFixed(2);
}
function AddItemScreen() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState({ nome: '', valor: '' });
  const [isModalVisible, setModalVisible] = useState(false);

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
      const storedItems = await AsyncStorage.getItem('@MyApp:items');
      if (storedItems !== null) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error loading items from AsyncStorage:', error);
    }
  };

  const saveItemsToStorage = async (itemsToSave) => {
    try {
      await AsyncStorage.setItem('@MyApp:items', JSON.stringify(itemsToSave));
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
      
      <Button title="Adicionar Item" onPress={() => setModalVisible(true)} />

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
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
            <Button title="Fechar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>

      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.listItem}>
            <Text>{`Nome: ${item.nome}, Valor: R$${item.valor}`}</Text>
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
    padding: 16,
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
  input: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
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
