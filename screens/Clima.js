import { StyleSheet, Text, View, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import Helper from '../utils/Helper';
import { getClima } from '../services/appService';

const Clima = ({ navigation }) => {

    const [location, setLocation] = useState(null);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [temperatura, setTemperatura] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Helper()
                Alert.alert('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLatitude(location.coords.latitude)
            setLongitude(location.coords.longitude);
            setLocation(location.coords);

            //no se actualiza rapido la latitud y la longitud entonces se mandan como null

            let temper = await getClima(latitude, longitude)
            console.log(latitude, longitude)
            setTemperatura(temper);
           
        })();
    }, []);
    

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
            <View style={styles.vista}>
            <Text style={styles.titulo}> Hora actual / Temperatura / Ubicación: </Text>
            <View style={styles.container}>
            <Text><strong>Fecha: </strong>{fechaCompleta}</Text>
            <Text><strong>Hora: </strong>{hora}</Text>
            <Text><strong>Temperatura actual: </strong>{temperatura}°C</Text>
                <Text><strong>Latitud: </strong>{latitude}</Text>
                <Text><strong>Longitud: </strong>{longitude}</Text>
            </View>
            </View>
        </Layout>
    );

}

export default Clima

const styles = StyleSheet.create({
    vista:{
        flex:1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        fontSize: 18,
        width:'80%',
        padding: 15,
        marginTop: '2.5%',
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '80%',
        textAlign: 'center',
        marginBottom: 15,
    },
});