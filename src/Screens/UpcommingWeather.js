import React from 'react';
import { Text,SafeAreaView,StyleSheet, FlatList, StatusBar,ImageBackground } from 'react-native';
import ListItems from '../Components/ListItems';

const UpcommingWeather = ({weatherData}) => {

    const renderItem=({item})=>{
        return(
            <ListItems condition={item.weather[0].main} dt_txt={item.dt_txt} main={item.main.temp_min} max={item.main.temp_max}/>
        )
    }
    const {container,image}=styles;
    return(
        <SafeAreaView style={container}>
            <ImageBackground
            style={image}
            source={require('../../assets/test.jpg')}
            >
                <FlatList
                data={weatherData}
                renderItem={renderItem}
                keyExtractor={(item)=>item.dt.toString()}
                />
            </ImageBackground>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight || 0,
        backgroundColor:"blue"
    },
    
    image:{
        flex:1,
    }
});
export default UpcommingWeather;