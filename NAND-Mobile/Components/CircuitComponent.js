import {  StyleSheet, PanResponder, Animated, View } from 'react-native'
import { Text, Box, Container, } from 'native-base'
import React, { useRef } from "react";
import { IOBox } from './IOVarBox';


export const CircuitComponent = ({name, inputChars, outputChars, borderWidth, borderHeight}) => {
    const pan = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
            pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
            });
        },
        onPanResponderMove: Animated.event(
            [
            null,
            { dx: pan.x, dy: pan.y }
            ],
            {useNativeDriver: false}
        ),
        onPanResponderRelease: () => {
            pan.flattenOffset();
        }
        })
    ).current;

    return (
        <Animated.View style={{transform: [{ translateX: pan.x.interpolate({inputRange:[0, 205], outputRange:[0, 205], extrapolate:"clamp"}) }, { translateY: pan.y }]
        }}
        {...panResponder.panHandlers}>
            <Box style={styles.circuitBox}>
                <IOBox inputChars={outputChars} align={"top"} />
                <Text style={{textAlign:"center", marginVertical: 15}}>
                    {name.toLowerCase()}
                </Text>
                <IOBox inputChars={inputChars} align={"bottom"}/>
            </Box>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    circuitBox: {
        textAlign: "center",
        alignSelf: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 2,
        width: 120,
    },

})