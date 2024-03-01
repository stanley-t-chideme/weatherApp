/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { ICardInfo } from '../types/interfaces/card';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { SCREEN_HEIGHT } from '../utilis/constants';

const WeatherCard: React.FC<ICardInfo> = ({ label,
    metric, value, icon = null }) => {

    return (
        <View
            style={{
                backgroundColor: '#3b3b39',
                padding: 20,
                borderRadius: 20,
                elevation: 10,
                flex: 1,
                height: SCREEN_HEIGHT * 0.2,
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    flex: 1,
                }}>
                {icon}
                <Text
                    variant="titleMedium"
                    style={{ color: 'white' }}>{`${value}${metric}`}</Text>
            </View>
            <Text variant="headlineSmall" style={{ paddingBottom: 10, color: 'white' }}>
                {label}
            </Text>
        </View>
    );
};

export { WeatherCard };
