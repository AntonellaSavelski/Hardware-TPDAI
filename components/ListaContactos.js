import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

export default function ListaContactos({ contacto }) {
    console.log(contacto)
    return (
        <View style={{ alignItems: 'center' }}>
            <Card style={styles.card}>
                <Card.Content style={{ marginTop: '5%', }}>
                    <Text>
                        Nombre completo: {contacto.name}
                    </Text>
                    <Text>
                        {contacto.phoneNumbers[0].label}: {contacto.phoneNumbers[0].number}
                    </Text>
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
});
