import React ,{useState,useEffect} from 'react';
import * as Location from 'expo-location';
import {WEATHER_API_KEY} from '@env';

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
export const useGetWeather=()=>{
  const [loading,setLoading]=useState(true);
  const [weather,setWeather]=useState([]);
  const[errorMsg,setErrorMsg]=useState(null); 
  const[lat,setLat]=useState([]);
  const[lon,setLon]=useState([]);

  const featchWeather=async()=>{
        try{
        setLoading(true);
        const response=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
        .then(response=>response.json())
        .then(data=>{
            setWeather(data)
            setLoading(false);
        })
        .catch(error=>{
            console.log(error);
            setErrorMsg(error);
            setLoading(false);
        });
        }
    catch(error){
        console.log(error);
        setErrorMsg(error);
        setLoading(false);
        }
    }
    
  useEffect(()=>{
    (async()=>{
      let {status}=await Location.requestForegroundPermissionsAsync();
      if(status!=='granted'){
        setErrorMsg('Permission to access location was denied');
        return;
      }
      let location=await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await featchWeather();
    }
    )(); 
    },[lat,lon]);

    return [loading,errorMsg,weather];
}

