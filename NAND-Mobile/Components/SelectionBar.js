import React, { useState } from "react";
import {Box, Text, Center, Pressable, CircleIcon, Modal} from "native-base";
import { StyleSheet } from 'react-native';
import { TableOne } from "../Components/Tables";

export const SelectionBar = () => {

    const [showSpecModal, setShowSpecModal] = useState(false);
    const [isErase, setIsErase] = useState(false);
    const [showToolboxModal, setShowToolboxModal] = useState(false);
    const [showHintModal, setShowHintModal] = useState(false);

    
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
        <Box alignSelf="center" style={styles.toolBox}>
            <Pressable onPress={() => {setShowSpecModal(true)}} opacity={showSpecModal ? 1 : 0.5}>
                {showSpecModal && <SpecModal />}
                <Center>
                    <CircleIcon />
                    <Text>Spec</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {setShowToolboxModal(true)}} opacity={showToolboxModal ? 1 : 0.5}>
                {showToolboxModal && <ToolboxModal />}
                <Center>
                    <CircleIcon />
                    <Text>Toolbox</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => setIsErase(!isErase)} opacity={isErase ? 1 : 0.5}>
                <Center>
                    <CircleIcon />
                    <Text>Erase</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {setShowHintModal(true)}} opacity={showHintModal ? 1 : 0.5}>
                {showHintModal && <HintModal />}
                <Center>
                    <CircleIcon />
                    <Text>Hint</Text>
                </Center>
            </Pressable>
        </Box>
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