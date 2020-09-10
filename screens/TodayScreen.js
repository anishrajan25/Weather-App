import React, { useState, useEffect } from 'react';
import { View, StyleSheet, RefreshControl, ScrollView, Image, FlatList, ImageBackground } from 'react-native';
import { Text } from "react-native-elements";

export default TodayScreen = ({data, location, reload, current}) => {
    const [refreshing, setRefreshing] = useState(false);

    useEffect(() => {
        setRefreshing(false);   
    }, current);

    const renderHourly = ({item}) => (
        <View style={{justifyContent: 'center', alignItems: 'center', marginRight: 15}}>
            <Text style={{ color: 'black', fontSize: 15}}>{ new Date((item.dt) *1000).toString().toString().substr(15,6)}</Text>
            <Image style={{height: 50, width: 50}} source={{uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}} />
            <Text style={{ color: 'black', fontSize: 15}}>{item.temp.toFixed(0)}°C</Text>
        </View>
    )
    
    if(current == null || data == null) return <View></View>
    return (
        <ScrollView containerStyle={styles.container} 
            refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={() =>{ reload(); setRefreshing(true)}} />
            }
        >
            <View style={{...styles.container, margin: 20, opacity: 1}}>
                <Text style={{ color: 'black', fontSize: 30}}>{current.name}</Text>
                <Text style={{ color: 'black', fontSize: 25}}>{ new Date((current.dt) *1000).toString().toString().replace(' 2020', ',').substr(0,17)}</Text>
                <View style={{flexDirection: 'row'}}>
                    <View style={{flex: 3, justifyContent: 'center', alignItems: 'center'}}>
                        <Image style={{height: 110, width: 110}} source={{uri: `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}} />
                        <Text style={{ color: 'black', fontSize: 20}}>{current.weather[0].description}</Text>
                    </View>
                    <View style={{flex: 5, justifyContent: 'center', alignItems: 'flex-end'}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{ color: 'black', fontSize: 80, fontWeight: '100'}}>{current.main.temp.toFixed(0)}</Text>
                            <Text style={{ color: 'black', fontSize: 50, marginTop: 10}}>°C</Text>
                        </View>
                        <Text style={{ color: 'black', fontSize: 19}}>Feels like {current.main.feels_like.toFixed(0)}°</Text>
                    </View>
                </View>
                <Text style={{ color: 'black', fontSize: 25, alignSelf: 'stretch', marginTop: 15}}>Hourly</Text>
                <FlatList 
                    style={{ borderTopWidth: 1, borderBottomWidth: 1, borderColor: 'black', paddingVertical: 5}}
                    data={data.hourly.slice(0,25)}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item, index) => item.dt}
                    renderItem={renderHourly}
                />
                <Text style={{ color: 'black', fontSize: 25, alignSelf: 'stretch', marginTop: 15}}>Current Details</Text>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Humidity</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.humidity}%</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Dew Point</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.dew_point.toFixed(0)}°C</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Pressure</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.pressure} hPa</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>UV Index</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.uvi.toFixed(0)}</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Clouds</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.clouds}%</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Wind Speed</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.wind_speed} m/s</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Wind Direction</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.wind_deg}</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Visibility</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{data.current.visibility / 1000} km</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Sunrise</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{new Date((data.current.sunrise) *1000).toString().toString().substr(15,6)}</Text>
                </View>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={{ color: 'black', textAlign: 'right', flex: 6}}>Sunset</Text>
                    <View style={{flex: 1}}></View>
                    <Text style={{ color: 'black', textAlign: 'left', flex: 6}}>{new Date((data.current.sunset) *1000).toString().toString().substr(15,6)}</Text>
                </View>
            </View>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        justifyContent: "center",
        zIndex: -5,
    }
});




// <Text>{location}</Text>
// <Text>{'\n\n\n'}</Text>
// <Text>{JSON.stringify(current)}</Text>
// <Text>{'\n\n\n'}</Text>
// <Text>{JSON.stringify(data.hourly)}</Text>