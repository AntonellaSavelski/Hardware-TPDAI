import { Platform, StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Helper from '../utils/Helper';

const Clima = ({ navigation }) => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Helper()
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude);
            setLocation(location.coords);
        })();
    }, []);

    let text = 'Cargando..';
    if (errorMsg) {
        text = errorMsg;
        Helper()
    } else if (location) {
        text = JSON.stringify(location);
    }
        var dia = new Date().getDate();
        var mes = new Date().getMonth() + 1;
        var año = new Date().getFullYear();
        var horas = (new Date().getHours() < 10 ? '0' : '') + new Date().getHours();
        var minutos = (new Date().getMinutes() < 10 ? '0' : '') + new Date().getMinutes();
        var segundos = (new Date().getSeconds() < 10 ? '0' : '') + new Date().getSeconds();

        var fechaCompleta = dia + '-' + mes + '-' + año
        var hora = horas + ':' + minutos + ':' + segundos
  

    return (
        <Layout>
            <View style={styles.container}>
            <Text style={styles.paragraph}>Fecha: {fechaCompleta}</Text>
            <Text style={styles.paragraph}>Hora: {hora}</Text>
                <Text style={styles.paragraph}>Latitud: {latitude}</Text>
                <Text style={styles.paragraph}>Longitud: {longitude}</Text>
            </View>
        </Layout>
    );

}

export default Clima

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: '80%'
    },
    titulo: {
        fontWeight: 'bold'
    },
    aviso: {
        backgroundColor: '#fff',
        paddingHorizontal: '5%',
        textAlign: 'center',
        paddingTop: '20%',
        color: 'red',
        fontSize: 18

    }
});