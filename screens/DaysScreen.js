import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView, Image } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'



const temp = {
    "city": {
      "id": 2643743,
      "name": "London",
      "coord": {
        "lon": -0.1258,
        "lat": 51.5085
      },
      "country": "GB",
      "population": 0,
      "timezone": 3600
    },
    "cod": "200",
    "message": 0.7809187,
    "cnt": 7,
    "list": [
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
      {
        "dt": 1568977200,
        "sunrise": 1568958164,
        "sunset": 1569002733,
        "temp": {
          "day": 293.79,
          "min": 288.85,
          "max": 294.47,
          "night": 288.85,
          "eve": 290.44,
          "morn": 293.79
        },
        "feels_like": {
          "day": 278.87,
          "night": 282.73,
          "eve": 281.92,
          "morn": 278.87
        },
        "pressure": 1025.04,
        "humidity": 42,
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "sky is clear",
            "icon": "01d"
          }
        ],
        "speed": 4.66,
        "deg": 102,
        "clouds": 0,
        "pop": 0.24
      },
    ]
}



export default DaysScreen = ({data}) => {

    if(data==null) {
      return <View></View>
    }
    
    return (
        <ScrollView containerStyle={styles.container}>
            {
                data.daily.map((day, i) => (
                    <ListItem key={i} bottomDivider containerStyle={{paddingVertical: 10}}>
                      <ListItem.Content style={{flex: 1, flexDirection: 'row'}}>
                          <View style={{flex: 5, marginTop: 'auto', marginBottom: 'auto'}}>
                            <ListItem.Title>{new Date((day.dt) * 1000).toString().substr(0,11)}</ListItem.Title>
                            <ListItem.Title>{day.weather[0].description}</ListItem.Title>
                          </View>
                          <View style={{flex: 4}}>
                            <Image style={{height: 60, width: 60}} source={{uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}} />
                            
                          </View>
                          <View style={{ flex: 3 , flexDirection: 'row', alignSelf:'center', justifyContent: 'flex-end'}}>
                            <View style={{flex: 1, alignSelf:'center', alignItems: 'center'}}>
                              <ListItem.Title>{day.temp.max.toFixed(0)}°</ListItem.Title>
                            </View>
                            <View style={{flex: 1, alignSelf:'center', alignItems: 'center'}}>
                              <ListItem.Title>{day.temp.min.toFixed(0)}°</ListItem.Title>
                            </View>
                          </View>
                          
                      </ListItem.Content>
                    </ListItem>
                ))
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
    }
});