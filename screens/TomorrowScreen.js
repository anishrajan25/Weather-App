import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';

export default TomorrowScreen = () => {
    return (
        <View style={styles.container}>
            <Text>TomorrowScreen</Text>
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