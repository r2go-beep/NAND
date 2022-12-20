import {  StyleSheet } from 'react-native'
import { Text, Box, Container, } from 'native-base'
import React from "react";

export const CircuitComponent = ({name, inputChars, outputChars}) => {

    function IOBox(IOChar) {
        return(
            <Box style={styles.IOBox} key={IOChar}>
                {IOChar}
            </Box>
        )
    }
    return (
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