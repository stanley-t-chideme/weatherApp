/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
    padding: 10,
  },
  text: {
    color: 'white',
    letterSpacing: 3,
  },
});

export const Footer: React.FC = () => {
  return (
    <View
      style={styles.container}>
      <Text variant="displayMedium" style={styles.text}>
        Weather App
      </Text>
      <Text variant="bodySmall" style={styles.text}>
        created by{' '}
      </Text>
      <Text variant="bodySmall" style={styles.text}>
        Stanley Chideme
      </Text>
    </View>
  );
};
