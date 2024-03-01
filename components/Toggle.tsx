/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, TouchableHighlight } from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        elevation: 10,
        borderRadius: 20,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: 'black',
    },
    option: {
        paddingHorizontal: 14,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 2,
    },
    selected: {
        elevation: 10,
        borderRadius: 20,
        backgroundColor: 'black',
    },
    selectedText: { color: 'white' },
});

export const Toggle: React.FC<{
    value: any;
    options: {
        left: {
            value: any;
            label: string;
        };
        right: {
            value: any;
            label: string;
        };
    };
    onChange: (val: any) => void;
}> = ({ onChange, options, value }) => {

    return (
        <View style={styles.container}>
            <TouchableHighlight
                style={[
                    styles.option,
                    options.left.value === value ? styles.selected : {},
                ]}
                onPress={() => {
                    onChange(options.left.value);
                }}>
                <Text
                    variant="headlineSmall"
                    style={[options.left.value === value ? styles.selectedText : {}]}>
                    {options.left.label}
                </Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={[
                    styles.option,
                    options.right.value === value ? styles.selected : {},
                ]}
                onPress={() => {
                    onChange(options.right.value);
                }}>
                <Text
                    variant="headlineSmall"
                    style={[options.right.value === value ? styles.selectedText : {}]}>
                    {options.right.label}
                </Text>
            </TouchableHighlight>
        </View>
    );
};
