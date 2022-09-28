import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import NumEmergencia from '../screens/NumEmegencia';
import Contactos from '../screens/Contactos';

const Stack = createNativeStackNavigator()

const MainStack = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }
                }>
                <Stack.Screen
                    name='Home'
                    component={Home}
                />
                <Stack.Screen
                    name='NumEmergencia'
                    component={NumEmergencia}
                />
                <Stack.Screen
                    name='Contactos'
                    component={Contactos}
                />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default MainStack

