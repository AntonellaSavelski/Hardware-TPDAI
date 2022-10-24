import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const Boton = (props) => {

    const { onPress, text } = props

    return (

        <TouchableOpacity

            style={style.button}
            onPress={onPress}
        >
            <Text style={style.buttonText}>
                {text}
            </Text>

        </TouchableOpacity>

    )
}

export default Boton


const style = StyleSheet.create({

    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18
    },
    button: {
        backgroundColor: 'blue',
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 8,
        padding: 15,
        marginTop: 30,
        minWidth: '80%'
    },
});
