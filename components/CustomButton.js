import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

const CustomButton = ({ onpresshandler, title, style }) => {
    return (
        <Pressable
            style={({ pressed }) => [
                { backgroundColor: pressed ? 'blue' : 'purple' },
                styles.button,
                { ...style }
            ]}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            android_ripple={{ color: 'red', borderless: true }}
            onPress={onpresshandler}
        >
            <Text style={styles.buttontext}>
                {title}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 50,
        alignItems: 'center'
    },
    buttontext: {
        color: 'black',
        fontSize: 20
    },
})

export default CustomButton;