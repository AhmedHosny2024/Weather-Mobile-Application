import React ,{useState,useEffect} from 'react';
import{NavigationContainer} from '@react-navigation/native';
import Tabs from './src/Components/Tabs';
import { ActivityIndicator, View } from 'react-native';
import {StyleSheet} from 'react-native';
import { useGetWeather } from './src/hooks/useGetWeather';
import ErrorItem from './src/Components/ErrorItem';

const App=()=>{
  const {container}=styles;
  const [loading,errorMsg,weather] = useGetWeather();
  if(weather && weather.list){
    return(
      <NavigationContainer>
        <Tabs weather={weather}/> 
      </NavigationContainer>
    );
  }

  return(
    <View style={container}>
      {loading?<ActivityIndicator size="large" color="black"/>
      
      :<ErrorItem/>}
    </View>
  );
  
}

const styles=StyleSheet.create({
  container:{
    justifyContent:'center',
    flex:1,
  },
});
export default App;