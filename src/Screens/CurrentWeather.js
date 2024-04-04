import React from 'react';
import { View,Text,SafeAreaView,StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import RowText from '../Components/RowText';
import { WeatherType } from '../utils/WeatherType';

const CurrentWeather = ({weatherData}) => {
  const{wrapper,container,tem,feel,highLow,highLowWrapper,disc,msg,bodyWrapper}=styles
  const {main:{temp,feels_like,temp_max,temp_min},weather}=weatherData;
  const weatherCondition=weather[0].main;  
  return (
    <SafeAreaView style={[wrapper,{backgroundColor:WeatherType[weatherCondition].backgroundColor}]}>
      <View style={container}>
        <Feather name={WeatherType[weatherCondition].icon} size={100} color="black" />
        <Text style={tem}>{temp}°</Text>
        <Text style={feel}>feels: {feels_like}°</Text>
        <RowText text1={`High: ${temp_max}°  `} text2={`Low: ${temp_min}°`} message1style={highLow} message2style={highLow} containerStyle={highLowWrapper}/>
      </View>
      <RowText text1={weather[0].disc} text2={WeatherType[weatherCondition].message} message1style={disc} message2style={msg} containerStyle={bodyWrapper}/>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  wrapper: {
    flex: 1,
  },
  tem:{
    fontSize: 48,
    color:"black",
  },
  feel:{
    fontSize: 30,
    color:"black",
  },
  highLow:{
    fontSize: 20,
    color:"black",
  },
  highLowWrapper:{
    flexDirection: 'row',
  },
  bodyWrapper:{
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft:25,
    paddingBottom: 40,
    backgroundColor: 'lightblue',
  },
  disc:{
    fontSize: 48,
  },
  msg:{
    fontSize: 30,
  }
});
export default CurrentWeather;