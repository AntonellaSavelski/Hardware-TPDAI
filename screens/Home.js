
import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';

const Home = ({ navigation }) => {

    
  const [data, setData] = useState({
    x: 0,
    y: 0,
    z: 0,
  });
  const [subscription, setSubscription] = useState(null);

  const _subscribe = () => {
    setSubscription(
      Accelerometer.addListener(accelerometerData => {
        setData(accelerometerData);
      })
    );
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
    console.log('cambio la data')
  };

  
  useEffect(() => {

    _subscribe();
    
    return () => _unsubscribe();
    
  }, [data]);


  return (
    <Layout>
        <Text style={styles.aviso}>¡Sacuda el teléfono para recibir un WhatsApp con información de la aplicación! </Text>
        <View style={styles.container}>
        
            <Text style={styles.titulo}>Bienvenido al TP React Native 02 - Hardware </Text>
            <Text>Realizado por: Antonella Savelski </Text>
        </View>
    </Layout>
  );

}

export default Home

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
        paddingTop:'20%',
        color: 'red',
        fontSize: 18
        
    }
});