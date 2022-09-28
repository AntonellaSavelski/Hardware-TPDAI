import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet } from 'react-native';
import { Link } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Material from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator()

const BottomTab = () => {
    return (
        <View style={styles.mainView}>
            <Link to={"/NumEmergencia"}>
            <Material name='phone-alert' size={30} />
            </Link>
            
            <Link to={"/Contactos"}>
            <Material name='contacts' size={30} />
            </Link>

            <Link to={"/Home"}>
            <Ionicons name='qr-code-outline' size={30} />
            </Link>

            <Link to={"/Home"}>

    
            </Link>

            <Link to={"/Home"}>

 
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
        justifyContent:"space-around",
        backgroundColor: "white",
        paddingVertical: "3%",
        position: "absolute",
        bottom: 0,
        width:"100%",
        borderWidth: 1,
        borderColor: 'black' 
    },
});
