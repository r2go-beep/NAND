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
    const [circuitData, setCircuitData] = useState(route.params.circuitData);
    const [isComplete, setIsComplete] = useState((PlayerJSON["Player"]["Levels"]["completed"] > GameJSON["Game"]["Levels"][circuitName.toUpperCase()]["prereq"]))

    return (
        <NativeBaseProvider>
            <View>
                <Box style={styles.gameBox} >
                    <CircuitComponent name={circuitName} inputChars={["a","b"]} outputChars={["y"]}/>
                </Box> 
                <SelectionBar 
                    TruthTable={circuitData["truthtable"]} 
                    Hint={circuitData["hint"]}
                    onMove={() => console.log("Move was pressed")}
                    onErase={() => console.log("Erase was pressed")}
                    onLine={() => console.log("Line was pressed")} />
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