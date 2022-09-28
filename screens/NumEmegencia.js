import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import Boton from '../components/Boton';
import { setTelefono } from '../services/appService';

const NumEmergencia = ({ navigation }) => {

    const [numero, setNumero] = useState('')

    const onEnviarPress = async (e) => {
        
        if (numero.length === 10) {
            await setTelefono(numero)
                .then(() => {
                    setNumero(numero);
                    
                    Alert.alert("El número se guardó correctamente");
                })
                .catch((err) => {
                    console.log("entró al catch")
                });
        }
        else {
            Alert.alert("Ingrese un número de telefono válido");
        }
    };

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.titulo}>Elija el número de teléfono de emergencia</Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Ingrese el número de emergencia"
                    name="numero"
                    maxLength={10}
                    value={numero}
                    keyboardType="numeric"
                    onChangeText={(number) =>
                        setNumero(
                            number
                        )}
                />
                <Boton
                    text="Guardar número"
                    onPress={onEnviarPress}
                />
            </View>
        </Layout>
    );
}

export default NumEmergencia

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontWeight: 'bold'
    },
    textInput: {
        borderWidth: 1,
        padding: 15,
        width: "80%",
        borderRadius: 8,
        backgroundColor: "#fff",
        marginTop: 15,

    },
});