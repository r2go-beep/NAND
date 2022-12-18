import React, { useState } from "react";
import { Image, HStack, ZStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon, Pressable, CircleIcon, Modal} from "native-base";
import { StyleSheet } from 'react-native';
import { TableOne } from "../Components/Tables";
import { CircuitComponent } from "../Components/CircuitComponent";
import { SelectionBar } from "../Components/SelectionBar";

export const LevelScreen = ({route, navigation}) => {
    
    const [circuitName, setCircuitName] = useState(route.params.circuitName);

    const [showSpecModal, setShowSpecModal] = useState(false);
    const [isErase, setIsErase] = useState(false);
    const [showToolboxModal, setShowToolboxModal] = useState(false);
    const [showHintModal, setShowHintModal] = useState(false);

    /*
    TO DO:
    - develop individual components that represent each logic gate
    - render these as their own components (<Nand />, <Xor />, <Or />)
    - components have an image, text, and carry information about their input/output
    */

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

    function SpecModal() {
        return(
            <Modal isOpen={showSpecModal} onClose={() => setShowSpecModal(false)}>
                <Modal.Content maxWidth={"400px"}>
                    <Modal.CloseButton />
                    <Modal.Header>Truth Table</Modal.Header>
                    <Modal.Body>
                    <TableOne data={LevelJSON["Game"]["Logic Gates"]["Nand"]["TruthTable"]}/>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        )
    }

    function ToolboxModal() {
        return(
            <Modal isOpen={showToolboxModal} onClose={() => setShowToolboxModal(false)}>
                <Modal.Content maxWidth={"400px"}>
                    <Modal.CloseButton />
                    <Modal.Header>Toolbox</Modal.Header>
                    <Modal.Body>
                        
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        )
    }

    function HintModal() {
        return(
            <Modal isOpen={showHintModal} onClose={() => setShowHintModal(false)}>
                <Modal.Content maxWidth={"400px"}>
                    <Modal.CloseButton />
                    <Modal.Header>Hint</Modal.Header>
                    <Modal.Body>
                        <Text>{LevelJSON["Game"]["Logic Gates"]["Nand"]["Hint"]}</Text>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        )
    }
       
    return (
        <NativeBaseProvider>
            <Center style={{width:"100%", maxWidth:"100%"}}>
                <Container style={styles.gameBox} >
                    <CircuitComponent name={circuitName} inputChars={["a","b"]} outputChars={["y"]}/>
                </Container>
                <SelectionBar />
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
    },
    toolBox: {
        width: "100%",
        maxWidth: "100%",
        minHeight: "20%",
        maxHeight: "80%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
    }
})