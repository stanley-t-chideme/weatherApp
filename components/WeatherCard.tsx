/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ICardInfo } from '../types/interfaces/card';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3b3b39',
        padding: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    label: {
        marginBottom: 10,
        color: 'white',
        letterSpacing: 2,
    },
    value: {
        color: 'white',
        marginTop: 10,
    },
});

const WeatherCard: React.FC<ICardInfo> = ({ label,
    metric, value, icon = null }) => {

    return (
        <View
            style={styles.container}>
            <Text variant="labelSmall" style={styles.label}>
                {label}
            </Text>
            {icon}
            <Text
                variant="titleSmall"
                style={styles.value}>{`${value === undefined || Number.isNaN(value) ? '- ' : value}${metric}`}</Text>
        </View>
    );
};

export { WeatherCard };
