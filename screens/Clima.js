import { StyleSheet, Text, View, Alert, Image, ActivityIndicator } from 'react-native';
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
    const [pais, setPais] = useState(null);
    const [barrio, setBarrio] = useState(null);
    const [icono, setIcono] = useState(null);

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

        })();
    }, []);

    useEffect(() => {
        (async () => {
            if (latitude && longitude) {
                let temper = await getClima(latitude, longitude)
                setTemperatura(temper.current.temp_c);
                setPais(temper.location.country);
                setBarrio(temper.location.name);
                setIcono(temper.current.condition.icon);
            }
        })();
    }, [location])


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
            {
                icono
                    ?
                    <View style={styles.vista}>
                        <Text>{icono}</Text>
                        <Text style={styles.titulo}> Hora actual / Temperatura / Ubicación: </Text>
                        <View style={styles.container}>
                            <Text style={{ fontWeight: "bold" }}>Temperatura actual: <Text style={styles.normal}>{temperatura}°C <Image source={{uri: `${icono}`}} style={{width:25, height:25}}></Image> </Text> </Text>
                            <Text style={{ fontWeight: "bold" }}>Fecha: <Text style={styles.normal}>{fechaCompleta}</Text></Text>
                            <Text style={{ fontWeight: "bold" }}>Hora: <Text style={styles.normal}>{hora}</Text></Text>
                            <Text style={{ fontWeight: "bold" }}>Barrio: <Text style={styles.normal}>{barrio}</Text></Text>
                            <Text style={{ fontWeight: "bold" }}>Pais: <Text style={styles.normal}>{pais}</Text></Text>
                            <Text style={{ fontWeight: "bold" }}>Latitud: <Text style={styles.normal}>{latitude}</Text></Text>
                            <Text style={{ fontWeight: "bold" }}>Longitud: <Text style={styles.normal}>{longitude}</Text></Text>
                        </View>
                    </View>
                    :
            <ActivityIndicator />
            }


        </Layout>
    );

}

export default Clima

const styles = StyleSheet.create({
    vista: {
        flex: 1,
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
        width: '80%',
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

    normal: {
        fontWeight: "normal",
    }
});