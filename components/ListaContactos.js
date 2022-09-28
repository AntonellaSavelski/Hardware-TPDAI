import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

export default function ListaContactos ({contacto}) {

    return (

        <View style={{alignItems: 'center'}}>
                <Card style={styles.card}>
                    <Card.Content style ={{marginTop: '5%',}}>
                            <Text>
                        Nombre completo: {contacto.name}
                    </Text>
                    <Text>
                        Número telefonico: {contacto.phoneNumber}
                    </Text>   
                    </Card.Content>
                </Card>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        marginBottom: '5%',
        width: '80%',
        paddingHorizontal:'8%'

    },
});
