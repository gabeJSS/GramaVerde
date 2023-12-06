import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, Modal, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export function calculateTotal(items) {
    return items.reduce((total, item) => total + parseFloat(item.valor), 0).toFixed(2);
  }

export default function Entradas() {
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
      const storedItems = await AsyncStorage.getItem('@MyApp:entradas');
      if (storedItems !== null) {
        setItems(JSON.parse(storedItems));
      }
    } catch (error) {
      console.error('Error loading items from AsyncStorage:', error);
    }
  };

  const saveItemsToStorage = async (itemsToSave) => {
    try {
      await AsyncStorage.setItem('@MyApp:entradas', JSON.stringify(itemsToSave));
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
  const navigation = useNavigation()
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
                    >Entradas</Text>
                </TouchableOpacity>
            </View>
            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity>
                            <FontAwesome name="close" size={24} color="black" onPress={() => setModalVisible(false)} />
                        </TouchableOpacity>

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
                            value={newItem.valor}
                            placeholderTextColor={'#949399'}
                            onChangeText={(text) => setNewItem({ ...newItem, valor: text })}
                            keyboardType="numeric"
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
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text
                        style={styles.tituloTxt}
                        >{`${item.nome}`}</Text>
                        <Text
                        style={styles.valorTxt}
                        >{`Valor: R$${item.valor}`}</Text>
                        <Button title="Excluir" onPress={() => removeItem(index)} color="red" />
                    </View>
                )}
                style={styles.list}
            />
            <TouchableOpacity
          style={styles.click}
          onPress={() => navigation.navigate('Main')}
        >
          <Image
            source={require('../../assets/voltar.png')}
            style={styles.voltar}
          />
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292832',
    },
    click:{
        marginLeft: 10,
        marginBottom: 10,

    },
    voltar: {
        width: 55,
        height: 55,
      },
    modalContainer: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: '#292832',
        borderColor: '#000',
        borderWidth: 2,
        padding: 20,
        borderRadius: 30,
        elevation: 5,
    },
    tituloTxt:{
        fontSize: 24,
        fontFamily: 'Inter-SemiBold',
        alignSelf: 'center',
        paddingLeft: 15
    },
    valorTxt:{
        fontSize:18,
        fontFamily: 'Inter-SemiBold',
        alignSelf: 'center',
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
    input: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
    },
    listItem: {
        marginBottom: 10,
        width: '60%',
        borderColor: '#ccc',
        backgroundColor: '#00AF04',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15
    },
    list: {
        marginTop: 20,
    },
});