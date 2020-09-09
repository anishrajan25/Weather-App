import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView, StatusBar } from 'react-native';
import * as Location from 'expo-location';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import TodayScreen from "./TodayScreen";
import TomorrowScreen from "./TomorrowScreen";
import DaysScreen from "./DaysScreen";
import { Header, Icon, Input } from "react-native-elements";
import { TextInput } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import fetchDaysForecast from "../redux/ActionCreators";

const mapDispatchToProps = dispatch => ({
  fetchDaysForecast: () => dispatch(fetchDaysForecast())
})

const mapStateToProps = state => ({
  daysForecast: state.daysForecast
})
const Tab = createMaterialTopTabNavigator();

function TabNavigation({location, date, data}) {
  //console.log(location);
  return (
    <Tab.Navigator 
      tabBarPosition='bottom'
      backBehavior='history'
      tabBarOptions={{
        style: styles.tab,
        activeTintColor: 'white',
        inactiveTintColor: 'grey',
        indicatorStyle: styles.indicator
      }} 
    >
      <Tab.Screen name="Today"  component={() => <TodayScreen location={location} date={date} data={data}/>} sceneContainerStyle={styles.tab} />
      <Tab.Screen name="Tomorrow" component={TomorrowScreen} style={styles.tab} />
      <Tab.Screen name="10 Days" component={() => <DaysScreen data={data} />} style={styles.tab}  />
    </Tab.Navigator>
  );
}

const MainScreen = ({daysForecast, fetchDaysForecast}) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [temp, setTemp] = useState(null);

    var dateObj = new Date((1595243443 - 18000) * 1000); 
 
    // Get hours from the timestamp 
    var hours = dateObj.getUTCHours(); 
    
    // Get minutes part from the timestamp 
    var minutes = dateObj.getUTCMinutes(); 
    
    // Get seconds part from the timestamp 
    var seconds = dateObj.getUTCSeconds();
    getlocation = async () => {
        setRefreshing(true);
        let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRefreshing(false);
      console.log("yahan tk aaya");

      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.coords.latitude}&lon=${location.coords.longitude}&units=metric&%20&appid=ba4c76b07e91ec15fad3e632e9d09a1f`)
      .then(response => {
          if(response.ok) {
              return response.json();
          }
          else {
              var error = new Error('Error ' + response.status + ': ' + response.statusText);
              error.response = response;
              throw error;
          }
      }, error => {
          var err = new Error(error.message);
          throw err;
      })
      .then( data => setTemp(data))
      .catch( error => console.log("inner fetch: " , error.message));

      fetchDaysForecast();
      console.log("upr tk yeh chal toh raha hai\n\n\n\n\n", daysForecast);
    }

  useEffect(() => {
    getlocation();
    
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <ScrollView contentContainerStyle={styles.container} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={getlocation} />
    }>
      <StatusBar backgroundColor="blue" barStyle='light-content' />
      <View style={{backgroundColor: '#4FB0DB'}}>
        <TextInput
          placeholder="Search"
          style={{ height: 50, backgroundColor: 'white' , zIndex: 2, borderRadius: 5, paddingHorizontal: 10, margin: 10}}
        />
      </View>
      <NavigationContainer>
        <TabNavigation
          data={temp}
          location={text} date={dateObj.toUTCString()} />
      </NavigationContainer>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
  tab: {
    color: 'white',
    backgroundColor: '#4FB0DB',
  },
  indicator: {
    backgroundColor: 'white'
  },
  label: {
    color: 'white',
    fontSize: 5,
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);