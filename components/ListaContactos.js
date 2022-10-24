import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { Card } from 'react-native-paper';

export default function ListaContactos({ contacto }) {
    let sinNum =false
    if (!contacto.phoneNumbers) {
        sinNum = true 
    }
    
    return (
        <View style={{ alignItems: 'center' }}>
            <Card style={styles.card}>

                <Card.Content style={{ marginTop: '5%', }}>
                    <Text style={{ fontWeight: "bold" }}>
                        Nombre completo: <Text style={styles.normal}>{contacto.name}</Text>
                    </Text>
                    {!sinNum ?<Text style={{ fontWeight: "bold" }}>
                        {contacto.phoneNumbers[0].label}: <Text style={styles.normal}>{contacto.phoneNumbers[0].number}</Text>
                    </Text> : <Text>El número de telefono no está registrado.</Text>}
                </Card.Content>
            </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        marginBottom: '5%',
        width: '100%',
        paddingHorizontal: '2%',
    },
    normal: {
        fontWeight: "normal",
    }
});
