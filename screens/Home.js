import { StyleSheet, View, Text } from 'react-native';
import Layout from '../components/Layout';
import React from 'react';

const Home = () => {

  return (
    <Layout>
        <View style={styles.container}>
            <Text style={styles.titulo}>Bienvenido al TP React Native 02 - Hardware </Text>
            <Text style={{ fontWeight: "bold" }}>Realizado por: <Text style={styles.normal}>Antonella Savelski </Text></Text>
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
    normal: {
        fontWeight: "normal",
    }
});