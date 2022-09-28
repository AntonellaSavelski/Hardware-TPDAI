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
            let { status } = await Contacts.requestPermissionsAsync();
            if (status != 'granted'){
                await Helper()
                Alert.alert("Se necesita acceso a los contactos para poder ver esta sección")
                
                let { status2 } = await Contacts.requestPermissionsAsync();

                if (status2 === 'granted') {
                    const { data } = await Contacts.getContactsAsync({
                        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
                    });
                    setContactos(data)
                    if (data.length > 0) {
                        const contact = data[0];
                        console.log(contact);
                    }
                }
            }
            
        })();
    }, []);
    return (
        <Layout>
            <View style={styles.container}>

                <FlatList
                    data={contactos}
                    renderItem={({ item }) => <ListaContactos key={item.phoneNumber} contacto={item} />}
                    keyExtractor={item => item.name}
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
    },
    titulo: {
        fontWeight: 'bold'
    }
});