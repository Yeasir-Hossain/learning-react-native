import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function ScreenA({ navigation }) {
    const onpressable = () => {
        navigation.navigate('Screen_B')
        // navigation.replace('Screen_B')
    }
    return (
        <View style={styles.body}>
            <Text>
                Screen A
            </Text>
            <Pressable onPress={onpressable} style={({ pressed }) => ({
                backgroundColor: pressed ? '#ddd' : '#0f0'
            })} >
                <Text>
                    Goto Screen B
                </Text>
            </Pressable>
            <Text>FontAwesome Icons</Text>
            <FontAwesome name='trophy' size={20} />
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

export default ScreenA;