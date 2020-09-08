import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';

export default TodayScreen = ({ location, date}) => {
    return (
        <View style={styles.container}>
            <Text>TodayScreen</Text>
            <Text>{location}</Text>
            <Text>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});