import React, { useState, useEffect } from 'react';
import { View, StyleSheet, RefreshControl, ScrollView, Image } from 'react-native';
import { Text } from "react-native-elements";

export default TodayScreen = ({data, location, reload, current}) => {
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setRefreshing(false);   
    }, current);
    
    if(current == null) return <View></View>
    return (
        <ScrollView containerStyle={styles.container} 
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() =>{ reload(); setRefreshing(true)}} />
            }
        >
            <View style={{...styles.container, margin: 10}}>
                <Text style={{fontSize: 30}}>{current.name}</Text>
                <Text style={{fontSize: 25}}>{ new Date((current.dt) *1000).toString().toString().replace(' 2020', ',').substr(0,17)}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{height: 100, width: 100}} source={{uri: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}} />
                        <Text style={{fontSize: 20}}>{current.weather[0].description}</Text>
                    </View>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 50}}>{current.main.temp.toFixed(0)}°</Text>
                    </View>
                </View>
            </View>
            
            <Text>{location}</Text>
            <Text>{'\n\n\n'}</Text>
            <Text>{JSON.stringify(current)}</Text>
            <Text>{'\n\n\n'}</Text>
            <Text>{JSON.stringify(data)}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});