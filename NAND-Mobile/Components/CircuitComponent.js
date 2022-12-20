import {  StyleSheet, PanResponder, Animated, View } from 'react-native'
import { Text, Box, Container, } from 'native-base'
import React, { useRef } from "react";

export const CircuitComponent = ({name, inputChars, outputChars, borderWidth, borderHeight}) => {

    function IOBox(IOChar) {
        return(
            <Box style={styles.IOBox} key={IOChar}>
                {IOChar}
            </Box>
        )
    }

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
            ]
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
            <Container>
                <Container style={styles.IOContainer}>
                    {outputChars.map((outputChar) => (IOBox(outputChar)))}
                </Container>
                <Box style={styles.circuitBox}>
                    <Text>
                        {name}
                    </Text>
                </Box>
                <Container style={styles.IOContainer}>
                    {inputChars.map((inputChar) => (IOBox(inputChar)))}
                </Container>
            </Container>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    circuitBox: {
        alignSelf: "center",
        backgroundColor: "#BEBEBE",
        paddingVertical: 20,
        paddingHorizontal: 30,
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 2
    },
    IOBox: {
        marginHorizontal: 5,
        paddingHorizontal: 5,
        borderRadius: 45,
        borderWidth: 1,
        backgroundColor: "#BEBEBE",
    },
    IOContainer: {
        zIndex: 4,
        alignSelf: "center",
        marginTop: -10,
        marginBottom: -10,
        display: "flex",
        flexDirection: "row",
        flexWrap: "nowrap",
        justifyContent: "space-around"
    }
})