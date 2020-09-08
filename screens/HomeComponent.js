import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';
import * as Location from 'expo-location';

export default function HomeComponent() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

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
      setRefreshing(false)
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
      <Text>{text}</Text>
      <Text>{dateObj.toUTCString()}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center'
  },
});