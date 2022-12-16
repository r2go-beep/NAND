import React, { useState } from "react";
import { Image, HStack, ZStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon, Pressable, CircleIcon, Modal} from "native-base";
import { StyleSheet } from 'react-native';
import { TableOne } from "../Components/Tables";

export const LevelScreen = ({route, navigation}) => {

    const [selected, setSelected] = useState(1);
    const [showSpecModal, setShowSpecModal] = useState(false);
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
       
    return (
        <NativeBaseProvider>
            <Center>
                <Container style={styles.gameBox} />
                <Box alignSelf="center" style={styles.toolBox}>
                    <Pressable onPress={() => {setSelected(0), setShowSpecModal(true)}} opacity={selected === 0 ? 1 : 0.5}>
                    <Modal isOpen={showSpecModal} onClose={() => setShowSpecModal(false)}>
                        <Modal.Content maxWidth={"400px"}>
                            <Modal.CloseButton />
                            <Modal.Header>Truth Table</Modal.Header>
                            <Modal.Body>
                               <TableOne data={LevelJSON["Game"]["Logic Gates"]["Nand"]["TruthTable"]}/>
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>
                        <Center>
                            <CircleIcon />
                            <Text>Spec</Text>
                        </Center>
                    </Pressable>
                    <Pressable onPress={() => {setSelected(1), setShowToolboxModal(true)}} opacity={selected === 1 ? 1 : 0.5}>
                    <Modal isOpen={showToolboxModal} onClose={() => setShowToolboxModal(false)}>
                        <Modal.Content maxWidth={"400px"}>
                            <Modal.CloseButton />
                            <Modal.Header>Toolbox</Modal.Header>
                            <Modal.Body>
                                  
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>
                        <Center>
                            <CircleIcon />
                            <Text>Toolbox</Text>
                        </Center>
                    </Pressable>
                    <Pressable onPress={() => setSelected(2)} opacity={selected === 2 ? 1 : 0.5}>
                        <Center>
                            <CircleIcon />
                            <Text>Erase</Text>
                        </Center>
                    </Pressable>
                    <Pressable onPress={() => {setSelected(3), setShowHintModal(true)}} opacity={selected === 3 ? 1 : 0.5}>
                    <Modal isOpen={showHintModal} onClose={() => setShowHintModal(false)}>
                        <Modal.Content maxWidth={"400px"}>
                            <Modal.CloseButton />
                            <Modal.Header>Hint</Modal.Header>
                            <Modal.Body>
                                <Text>{LevelJSON["Game"]["Logic Gates"]["Nand"]["Hint"]}</Text>
                            </Modal.Body>
                        </Modal.Content>
                    </Modal>
                        <Center>
                            <CircleIcon />
                            <Text>Hint</Text>
                        </Center>
                    </Pressable>
                </Box>
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