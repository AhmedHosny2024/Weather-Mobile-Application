import React from "react";
import { SafeAreaView,View, Text, StyleSheet,ImageBackground, StatusBar } from "react-native";
import IconText from "../Components/IconText";
import moment from "moment";

const City = ({weatherData}) => {
    console.log(weatherData);
    const{name,country,population,sunrise,sunset}=weatherData;

    const{container,image,cityName,cityText,
        CountryName,popWrapper,riseSetWrapper,row,
        popText,riseSetText} =styles;
    return (
        <SafeAreaView style={container}>
            <ImageBackground 
            source={require('../../assets/city.jpg')} 
            style={image}
            >
                <Text style={[cityName,cityText]}>{name}</Text>
                <Text style={[CountryName,cityText]}>{country}</Text>
                <View style={[popWrapper,row]}>
                    <IconText iconName={"user"} text={population} iconColor={"red"} bodyTextStyles={popText}/>
                </View>
                <View style={[riseSetWrapper,row]}>
                    <IconText iconName={"sunrise"} text={moment(sunrise).format("h:mm:ss a")} iconColor={"white"} bodyTextStyles={riseSetText}/>
                    <IconText iconName={"sunset"} text={moment(sunset).format("h:mm:ss a")} iconColor={"white"} bodyTextStyles={riseSetText}/>
                </View>
            </ImageBackground>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    image:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
    },
    cityName:{
        fontSize: 48,
    },
    CountryName:{
        fontSize: 30,
    },
    cityText:{
        justifyContent:"center",
        alignSelf:"center",
        fontSize: 30,
        color:"white",
        fontWeight:"bold",
    },
    row:{
        flexDirection:"row",
        alignItems:"center",
    },
    popWrapper:{
        justifyContent:"center",
        marginTop: 30,
    },
    popText:{
        fontSize: 25,
        marginLeft: 7.5,
        color:"red",
    },
    riseSetWrapper:{
        justifyContent:"space-around",
        marginTop: 30,
    },
    riseSetText:{
        fontSize: 20,
        color:"white",
    },

});
export default City;
