import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, RefreshControl, ScrollView } from 'react-native';

export default DaysScreen = () => {
    return (
        <View style={styles.container}>
            <Text>DaysScreen</Text>
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