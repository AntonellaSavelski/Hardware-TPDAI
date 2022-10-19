import { StyleSheet, Text, View, Image, ImageBackground, Button, TouchableOpacity, Alert, Modal, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Layout from '../components/Layout';
import React, { useState, useEffect } from 'react';
import Boton from '../components/Boton';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Helper from '../utils/Helper';

const About = ({ navigation }) => {

    const miQR = "https://api.qrserver.com/v1/create-qr-code/?data=AntonellaSavelski"
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    const [integrantes, setIntegrantes] = useState('')
    const [open, setOpen] = useState(false);

    const askForCameraPermission = () => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })()
    }

    // Request Camera Permission
    useEffect(() => {
        askForCameraPermission();
    }, []);

    // What happens when we scan the bar code
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        setIntegrantes(data)
        setOpen(true)
    };

    // Check permissions and return the screens
    if (hasPermission === null) {
        return (
            <View style={styles.container}>
                <Text>Requesting for camera permission</Text>
            </View>)
    }
    if (hasPermission === false) {
        Helper()
        Alert.alert("Se necesita acceso a la camara para poder escanear un código.")
            
    }
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.titulo}> Sobre Nosotros</Text>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={{ uri: `${miQR}` }}
                />
               <View style={styles.barcodebox}>
                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                        style={{ height: 400, width: 400 }} />
                </View>
                <Modal visible={open}>

                    <Text style={styles.maintext}>Los integrantes del grupo cuyo QR fue escaneado son: <Text style={{fontWeight:'normal'}}>{integrantes}</Text></Text>
                    <Button title="Cerrar" onPress={() => setOpen(false)} color='blue' />
                </Modal>
                {scanned && 
                <Pressable style={styles.boton} onPress={() => setScanned(false)}>
                    <Text style={styles.botonText}> Escanear otro código</Text>
                </Pressable>}
                
            </View>

        </Layout>
    );

}

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'

    },
    titulo: {
        fontWeight: 'bold',
        marginBottom: 30,
        fontSize: 20

    },
    maintext: {
        fontSize: 16,
        margin: 20,
        lineHeight: 25,
        fontWeight: 'bold'
    },
    barcodebox: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 300,
        width: 300,
        overflow: 'hidden',
        borderRadius: 30,
        backgroundColor: 'white',
        marginTop: '10%'
    },
    boton:{
        marginTop: '10%', 
        padding: '5%',
        backgroundColor: 'blue',
        borderRadius: 8,
        
    },
    botonText:{
        fontSize: 16,
        color: 'white',
    }
});