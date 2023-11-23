import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { View, TextInput, Button, FlatList, Text, StyleSheet, Modal, Image, TouchableOpacity } from 'react-native';

const FinanceManagerApp = () => {
    const [items, setItems] = useState([]);
    const [newItem, setNewItem] = useState({ nome: '', valor: '', data: '' });
    const [isModalVisible, setModalVisible] = useState(false);

    const addItem = () => {
        if (newItem.nome.trim() !== '' && newItem.valor.trim() !== '' && newItem.data.trim() !== '') {
            setItems([...items, newItem]);
            setNewItem({ nome: '', valor: '', data: '' });
            setModalVisible(false); // Fechar o modal após adicionar o item
        }
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
            <View style={styles.inputContainer}>
            </View>
            <FlatList
                data={items}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.listItem}>
                        <Text>{`Nome: ${item.nome}, Valor: R$${item.valor}, Data: ${item.data}`}</Text>
                    </View>
                )}
                style={styles.list}
            />

            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}>
                            <FontAwesome
                                name="close"
                                size={24}
                                color="black" />
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
                            style={styles.confirma}
                        >
                            <Image
                                source={require('../../assets/confirm.png')}
                                style={styles.confirmImg}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#292832',
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    confirma: {
        marginTop: 10,
        alignSelf: 'center'
    },
    cabeçalho: {
        flex: 1,
        width: '100%',
        maxHeight: '25%',
        backgroundColor: '#9DD08E',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    confirmImg: {
        width: 192,
        height: 63
    },
    addImg: {
        width: 65,
        height: 65,
        marginRight: 40
    },
    imgLogo: {
        width: 140,
        height: 20,
        marginLeft: 5,
        marginTop: 5
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
    input: {
        marginRight: 10,
        marginTop: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#292832',
        borderRadius: 10,
    },
    listItem: {
        marginBottom: 10,
    },
    list: {
        marginTop: 20,
        alignSelf: 'center',
        backgroundColor: '#00AF04',
        width: 300
    },
    modalContainer: {
        flex: 1,
        alignSelf: 'center',
        maxHeight: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000'
    },
    botao: {

    },
    modalContent: {
        backgroundColor: 'white',
        backgroundColor: '#292832',
        padding: 20,
        borderRadius: 20,
        elevation: 5,
    },
});

export default FinanceManagerApp;
