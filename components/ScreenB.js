import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

function ScreenB({ navigation }) {
    const onpressable = () => {
        // navigation.navigate('Screen_B')
        navigation.goBack()
    }
    return (
        <View style={styles.body}>
            <Text>
                Screen B
            </Text>
            <Pressable onPress={onpressable} style={({ pressed }) => ({
                backgroundColor: pressed ? '#ddd' : '#0f0'
            })} >
                <Text>
                    Goto Screen A
                </Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ScreenB;