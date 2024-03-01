/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between"
    }
});

function Header() {
    return <View style={styles.container}>
        <IconButton
            icon="camera"
            iconColor={"white"}
            containerColor='black'
            selected={true}
            style={{

            }}
            size={20}
            onPress={() => console.log('Pressed')}
        />

        <IconButton
            icon="dots-grid"
            iconColor={"white"}
            containerColor='black'
            size={20}
            onPress={() => console.log('Pressed')}
        />
    </View>;
}

export { Header };
