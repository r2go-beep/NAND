import { Button, View } from "native-base";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import * as GameJSON from "../GameData/Game.json";
import { CircuitComponent } from "./CircuitComponent";

const showComponent = (elem) => {

    return (
        <Button>
            {elem}
        </Button>
    )
}

export const Toolbox = ({levelName}) => {
    
    const [toolbox, setToolbox] = useState(GameJSON["Game"]["Levels"][levelName]["toolbox"])

    return (
        <View>
            {toolbox.map((elem) => showComponent(elem))}
        </View>
    )
}