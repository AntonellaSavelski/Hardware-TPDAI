import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

export const setTelefono = async (numero) => {

    await AsyncStorage.setItem('telefono', numero) // guarda en el storage el telefono
};
export const getClima = async(latitud, longitud) => {

    const apiKey = '2b114619606f4440b92120147221910'
    const baseUrl = 'http://api.weatherapi.com/v1';
    const ubicacion = latitud+','+longitud

    return axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${ubicacion}`)
    .then((response) => {
        console.log(response.data);
        return response.data;
    })
    .catch((error) => {
        mensajeUSuario("Fallo la llamada a la API clima")
        console.log(error);
        
    })

};