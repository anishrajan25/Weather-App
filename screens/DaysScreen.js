import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import { ListItem, Icon } from 'react-native-elements'



const data = {
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



export default DaysScreen = () => {

    
    
    return (
        <ScrollView containerStyle={styles.container}>
            {
                data.list.map((data, i) => (
                    <ListItem key={i} bottomDivider>
                        <Icon name="info" />
                        <ListItem.Content>
                            <ListItem.Title>{i}</ListItem.Title>
                            <ListItem.Title>{new Date((data.dt) * 1000).toLocaleString().substr(0,11)}</ListItem.Title>
                            <ListItem.Subtitle>{data.weather.description}</ListItem.Subtitle>
                            <ListItem.Subtitle>{data.temp.max}</ListItem.Subtitle>
                            <ListItem.Subtitle>{data.temp.min}</ListItem.Subtitle>
                            <ListItem.Subtitle>{data.weather.icon}</ListItem.Subtitle>
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
        alignContent: 'center'
    }
});