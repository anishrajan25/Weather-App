import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';

export default TodayScreen = ({data, location, date}) => {
    return (
        <ScrollView containerStyle={styles.container}>
            <Text>TodayScreen</Text>
            <Text>{JSON.stringify(location)}</Text>
            <Text>{date}</Text>
            <Text>{JSON.stringify(data)}</Text>
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