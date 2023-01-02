import React, { useState } from "react";
import {  StyleSheet} from 'react-native'
import {Box, Container, Center, Pressable, CircleIcon, Modal, View} from "native-base";
import { CircuitComponent } from "./CircuitComponent";
import { IOBox } from "./IOVarBox";

export const GameBox = () => {
    const outputChars = ["y","x"]
    const inputChars = ["a","b"]
    const circuitName = "circuit"

    return(
        <Box style={styles.gameBox} >
            <IOBox inputChars={outputChars} align={"top"}/>
            <CircuitComponent name={circuitName} inputChars={["a","b"]} outputChars={["y"]}/>
            <IOBox inputChars={inputChars} align={"bottom"}/>
        </Box> 
    )
}

const styles = StyleSheet.create({
    gameBox: {
        flex: 1,
        backgroundColor: "#B8FFAC",
        marginTop: 20,
        width: "100%",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 2
    },    
})
