import React from 'react';
import CurrentWeather from '../Screens/CurrentWeather';
import UpcommingWeather from '../Screens/UpcommingWeather';
import City from '../Screens/City';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
   const {weather}=props;
    return(
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { backgroundColor: 'lightblue',height:60 },
            tabBarLabelStyle: { fontSize: 15,fontWeight:"bold" },
          }}>
              <Tab.Screen 
              name="Today" 
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather name="droplet" size={25} color={focused?"blue":"black"} />
                ),
              }}
              >
                {()=> <CurrentWeather weatherData={weather.list[0]}/> }
              </Tab.Screen>
              <Tab.Screen name="Upcomming"  
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather name="clock" size={25} color={focused?"blue":"black"} />
                ),
              }}
              >
                {()=> <UpcommingWeather weatherData={weather.list}/> }
              </Tab.Screen>
              <Tab.Screen name="City"
              options={{
                tabBarIcon: ({ focused }) => (
                  <Feather name="home" size={25} color={focused?"blue":"black"} />
                ),
              }}
              >
                {()=> <City weatherData={weather.city}/> }
              </Tab.Screen>
          </Tab.Navigator>
    );
}  

export default Tabs;