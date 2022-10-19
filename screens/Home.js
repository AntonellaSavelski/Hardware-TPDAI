import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';

const Home = ({ navigation }) => {

  return (
    <Layout>
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
        justifyContent:'center'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 20,
        width: '80%',
        textAlign: 'center',
        marginBottom: 15,
    }, 
});