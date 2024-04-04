import React from 'react';
import { View,Text,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { WeatherType } from '../utils/WeatherType';
import moment from 'moment';

const ListItems=(props)=>{
    const {dt_txt,main,max,condition}=props;
    const {item,dt,temp,dateText}=styles;
    return(
        <View style={item}>
            <Feather name={WeatherType[condition].icon} size={50} color="white" />
            <View style={dateText}>
                <Text style={dt}>  {moment(dt_txt).format('dddd')} </Text>
                <Text style={dt}>  {moment(dt_txt).format("h:mm:ss a")} </Text>
            </View>
            <Text style={temp}> {Math.round(main)} / {Math.round(max)} °</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        padding:20,
        marginVertical:8,
        marginHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderWidth:2,
        borderColor:"black",
        backgroundColor:"lightblue",
    },
    temp:{
        fontSize:20,
        color:"white",
    },
    dt:{
        fontSize:15,
        color:"white",
    },
    dateText:{
        flexDirection:'column',

    },
})
export default ListItems 