import React, { useState } from "react";
import { NativeBaseProvider, View, Box} from "native-base";
import { StyleSheet } from 'react-native';
import { SelectionBar } from "../Components/SelectionBar";
import { PassedOverlay } from "./PassedOverlay";
import { GameBox } from "../Components/GameBox";
import * as PlayerJSON from "../GameData/Player.json"
import * as GameJSON from "../GameData/Game.json"

export const LevelScreen = ({route, navigation}) => {
    
    const [circuitName, setCircuitName] = useState(route.params.circuitName);
    const [circuitData, setCircuitData] = useState(route.params.circuitData);
    const [isComplete, setIsComplete] = useState((PlayerJSON["Player"]["Levels"]["completed"] > GameJSON["Game"]["Levels"][circuitName.toUpperCase()]["prereq"]))

    return (
        <NativeBaseProvider>
            <View style={styles.levelScreenView}>
                <GameBox />
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
    levelScreenView: {
        height: "100%",
        display: "flex",
        flexFlow: "column",
    }
})