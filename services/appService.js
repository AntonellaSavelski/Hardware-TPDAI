import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Alert } from "react-native";
import Helper from "../utils/Helper"

export const setTelefono = async (numero) => {

    await AsyncStorage.setItem('telefono', numero) // guarda en el storage el telefono
};
export const getClima = async(lat, lon) => {

    const apiKey = "2b114619606f4440b92120147221910"
    const baseUrl = "http://api.weatherapi.com/v1"
    const ubi = lat+','+lon
    console.log(ubi)

    return axios.get(`${baseUrl}/current.json?key=${apiKey}&q=${ubi}`)
    .then((response) => {
        
        return response.data;
    })
    .catch((error) => {
        Alert.alert("Error en la llamada a la API");
        Helper();
    })

};