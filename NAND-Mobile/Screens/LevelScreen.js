import React, { useState } from "react";
import { NativeBaseProvider, View, Box} from "native-base";
import { StyleSheet } from 'react-native';
import { CircuitComponent } from "../Components/CircuitComponent";
import { SelectionBar } from "../Components/SelectionBar";
import { PassedOverlay } from "./PassedOverlay";
import * as PlayerJSON from "../GameData/Player.json"
import * as GameJSON from "../GameData/Game.json"

export const LevelScreen = ({route, navigation}) => {
    
    const [circuitName, setCircuitName] = useState(route.params.circuitName);
    const [isComplete, setIsComplete] = useState((PlayerJSON["Player"]["Levels"]["completed"] > GameJSON["Game"]["Levels"][circuitName.toUpperCase()]["prereq"]))

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
            <View>
                <Box style={styles.gameBox} >
                    <CircuitComponent name={circuitName} inputChars={["a","b"]} outputChars={["y"]}/>
                </Box> 
                <SelectionBar 
                    TruthTable={LevelJSON["Game"]["Logic Gates"]["Nand"]["TruthTable"]} 
                    Hint={LevelJSON["Game"]["Logic Gates"]["Nand"]["Hint"]} />
                {isComplete && <PassedOverlay key={circuitName} name={circuitName}/>}
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
        borderColor: "black",
        borderWidth: 2
    },
})