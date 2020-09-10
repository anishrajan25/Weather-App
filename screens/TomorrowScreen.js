import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView, ImageBackground } from 'react-native';

export default TomorrowScreen = () => {
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={require('../assets/images/drizzle.jpeg')} >
                <Text>TomorrowScreen</Text>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});