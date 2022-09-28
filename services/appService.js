import AsyncStorage from "@react-native-async-storage/async-storage";

export const setTelefono = async (numero) => {

    await AsyncStorage.setItem('telefono', numero) // guarda en el storage el telefono
};
  