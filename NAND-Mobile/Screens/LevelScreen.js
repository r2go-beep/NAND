import React, { useState } from "react";
import { NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon, Pressable, CircleIcon, Modal} from "native-base";
import { StyleSheet } from 'react-native';
import { TableOne } from "../Components/Tables";
import { CircuitComponent } from "../Components/CircuitComponent";
import { SelectionBar } from "../Components/SelectionBar";

export const LevelScreen = ({route, navigation}) => {
    
    const [circuitName, setCircuitName] = useState(route.params.circuitName);

    const LevelJSON = {
        "Game": {
            "Logic Gates": {
                "Nand": {
                    "TruthTable": [{a: 0, b: 0, output: 1}, {a: 0, b: 1, output: 1}],
                    "Hint": "Try using only Nand gates"
                }
            } 
        }
    }

       
    return (
        <NativeBaseProvider>
            <Center style={{width:"100%", maxWidth:"100%"}}>
                <Container style={styles.gameBox} >
                    <CircuitComponent name={circuitName} inputChars={["a","b"]} outputChars={["y"]}/>
                </Container>
                <SelectionBar 
                    levelName={circuitName} 
                    Hint={LevelJSON["Game"]["Logic Gates"]["Nand"]["Hint"]} />
            </Center>
        </NativeBaseProvider>
    )
};

const styles = StyleSheet.create({
    gameBox: {
        alignSelf: "center",
        backgroundColor: "#B8FFAC",
        marginTop: 20,
        width: "100%",
        minHeight: "80%",
        maxHeight: "80%",
        borderRadius: 15,
        borderColor: "black",
        borderWidth: 2
    }
})