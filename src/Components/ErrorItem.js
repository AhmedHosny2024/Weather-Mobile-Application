import React from "react";
import { View, Text,StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const ErrorItem = () => {
    const {container,text}=styles;
    return(
        <View style={container}>
            <Text style={text}>Something went wrong</Text>
            <Feather name="frown" size={100} color="white" />
        </View>

    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
    },
    text:{
        fontSize: 30,
        color:"white",
        marginHorizontal:10,
        textAlign:"center",
    }
});
export default ErrorItem;
