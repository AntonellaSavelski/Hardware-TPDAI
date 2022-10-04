import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import * as Contacts from 'expo-contacts';
import ListaContactos from '../components/ListaContactos';
import Helper from '../utils/Helper';

const Contactos = ({ navigation }) => {

    const [contactos, setContactos] = useState()

    useEffect(() => {
        (async () => {
            const { status } = await Contacts.requestPermissionsAsync();
            if (status === 'granted') {
                const { data } = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
                });
                setContactos(data)
                if (data.length > 0) {
                    const contact = data[0];
                    console.log(contact);
                }
            }
            else {
                await Helper()
                Alert.alert("Se necesita acceso a los contactos para poder ver esta sección, para habilitar el acceso dirijase a los ajustes del teléfono, aplicaciónes y seleccione permitir.")
                navigation.navigate("Home")
            }
        })();
    }, []);

    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.titulo}> Lista de contactos: </Text>
                <FlatList
                    data={contactos}
                    renderItem={({ item }) => <ListaContactos key={item.id} contacto={item} />}
                    keyExtractor={item => item.id}
                />
            </View>
        </Layout>

    );
}

export default Contactos

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 80,
    },
    titulo: {
        fontWeight: 'bold',
        marginBottom: 30,
        fontSize: 20
    }
});