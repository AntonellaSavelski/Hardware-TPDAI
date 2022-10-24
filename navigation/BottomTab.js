import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <View style={styles.mainView}>
            <Link to={"/NumEmergencia"}>
                <Feather name='phone' size={30} />
            </Link>
            <Link to={"/Contactos"}>
                <AntDesign name='contacts' size={30} />
            </Link>
            <Link to={"/Home"}>
                <Ionicons name='home-outline' size={30} />
            </Link>
            <Link to={"/About"}>
                <Ionicons name='qr-code-outline' size={30} />
            </Link>
            <Link to={"/Clima"}>
                <Material name='weather-partly-cloudy' size={30} />
            </Link>
        </View>
    )
}
export default BottomTab;

const styles = StyleSheet.create({
    mainView: {
        color: 'blue',
        fontSize: 18,
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "white",
        paddingVertical: "3%",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderWidth: 1,
        borderColor: 'black'
    },
});
