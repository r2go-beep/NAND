import React, { useState } from "react";
import { NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon, Pressable, CircleIcon, Modal} from "native-base";
import { StyleSheet } from 'react-native';
import { TableOne } from "../Components/Tables";
import { CircuitComponent } from "../Components/CircuitComponent";
import { SelectionBar } from "../Components/SelectionBar";
import { PassedOverlay } from "./PassedOverlay";

export const LevelScreen = ({route, navigation}) => {
    
    const [circuitName, setCircuitName] = useState(route.params.circuitName);
    const [circuitData, setCircuitData] = useState(route.params.circuitData);

    return (
        <NativeBaseProvider>
            <View style={{width:"100%", maxWidth:"100%"}}>
                <Container style={styles.gameBox} >
                    <CircuitComponent name={circuitName} inputChars={["a","b"]} outputChars={["y"]}/>
                </Container> 
                <SelectionBar 
                    TruthTable={circuitData["truthtable"]} 
                    Hint={circuitData["hint"]} />
                <PassedOverlay key={circuitName} name={circuitName}/>
            </View>
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