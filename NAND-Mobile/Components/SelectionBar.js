import React, { useState } from "react";
import {Box, Text, Center, Pressable, CircleIcon, Modal, View} from "native-base";
import { StyleSheet } from 'react-native';
import { TruthTableComp } from "./TruthTableComp";

const ToolBarModal = ({isOpen, onClose, Header, Body}) => {
    return(
        <Modal isOpen={isOpen} onClose={onClose} key={Header}>
            <Modal.Content maxWidth={"400px"}>
                <Modal.CloseButton />
                <Modal.Header>
                    {Header}
                </Modal.Header>
                <Modal.Body>
                    {Body}
                </Modal.Body>
            </Modal.Content>
        </Modal>
    )
}

export const SelectionBar = ({ TruthTable, Hint, onErase}) => {

    const [showSpecModal, setShowSpecModal] = useState(false);
    const [isErase, setIsErase] = useState(false);
    const [showToolboxModal, setShowToolboxModal] = useState(false);
    const [showHintModal, setShowHintModal] = useState(false);
       
    return (
        <Box alignSelf="center" style={styles.toolBox}>
            <Pressable onPress={() => {setShowSpecModal(true)}} opacity={showSpecModal ? 1 : 0.5}>
                {showSpecModal && <ToolBarModal 
                    isOpen={showSpecModal} 
                    onClose={() => setShowSpecModal(false)}
                    Header={"Truth Table"}
                    Body={<TruthTableComp TruthTable={TruthTable}/>}
                />}
                <Center>
                    <CircleIcon />
                    <Text>Spec</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {setShowToolboxModal(true)}} opacity={showToolboxModal ? 1 : 0.5}>
                {showToolboxModal && <ToolBarModal 
                    isOpen={showToolboxModal} 
                    onClose={() => setShowToolboxModal(false)}
                    Header={"Toolbox"}
                    Body={""}
                />}
                <Center>
                    <CircleIcon />
                    <Text>Toolbox</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {onErase, setIsErase(!isErase)}} opacity={isErase ? 1 : 0.5}>
                <Center>
                    <CircleIcon />
                    <Text>Erase</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {setShowHintModal(true)}} opacity={showHintModal ? 1 : 0.5}>
                {showHintModal && <ToolBarModal 
                    isOpen={showHintModal} 
                    onClose={() => setShowHintModal(false)}
                    Header={"Hint"}
                    Body={Hint}
                />}
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