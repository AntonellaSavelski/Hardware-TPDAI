import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
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
        console.log(response.data);
        return response.data.current.temp_c;
    })
    .catch((error) => {
        console.log("Error en la llamada a la API", error);
        Helper();
    })

};