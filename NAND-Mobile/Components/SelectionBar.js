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

const EnumSelectedMod = {
    spec: 0,
    toolbox: 1,
    move: 2,
    erase: 3,
    line: 4,
    hint: 5,
    none: 6
}

export const SelectionBar = ({ TruthTable, Hint, onErase, onMove, onLine}) => {

    const [selectedMod, setSelectedMod] = useState(EnumSelectedMod.none);

    return (
        <Box alignSelf="center" style={styles.toolBox}>
            <Pressable onPress={() => {setSelectedMod(EnumSelectedMod.spec)}}
                opacity={selectedMod == EnumSelectedMod.spec ? 1 : 0.5}>
                {selectedMod == EnumSelectedMod.spec && <ToolBarModal 
                    isOpen={true} 
                    onClose={() => setSelectedMod(EnumSelectedMod.none)}
                    Header={"Truth Table"}
                    Body={<TruthTableComp TruthTable={TruthTable}/>}
                />}
                <Center>
                    <CircleIcon />
                    <Text>Spec</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {setSelectedMod(EnumSelectedMod.toolbox)}} 
                opacity={selectedMod == EnumSelectedMod.toolbox ? 1 : 0.5}>
                {selectedMod == EnumSelectedMod.toolbox && <ToolBarModal 
                    isOpen={true} 
                    onClose={() => setSelectedMod(EnumSelectedMod.none)}
                    Header={"Toolbox"}
                    Body={""}
                />}
                <Center>
                    <CircleIcon />
                    <Text>Toolbox</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {setSelectedMod(selectedMod == EnumSelectedMod.move ? EnumSelectedMod.none : EnumSelectedMod.move), onMove()}} 
                opacity={selectedMod == EnumSelectedMod.move ? 1 : 0.5}>
                <Center>
                    <CircleIcon />
                    <Text>Move</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => (setSelectedMod(selectedMod == EnumSelectedMod.erase ? EnumSelectedMod.none : EnumSelectedMod.erase), onErase())}
                opacity={selectedMod == EnumSelectedMod.erase ? 1 : 0.5}>
                <Center>
                    <CircleIcon />
                    <Text>Erase</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => (setSelectedMod(selectedMod == EnumSelectedMod.line ? EnumSelectedMod.none : EnumSelectedMod.line), onLine())} 
                opacity={selectedMod == EnumSelectedMod.line ? 1 : 0.5}>
                <Center>
                    <CircleIcon />
                    <Text>Line</Text>
                </Center>
            </Pressable>
            <Pressable onPress={() => {setSelectedMod(EnumSelectedMod.hint)}} 
                opacity={selectedMod == EnumSelectedMod.hint ? 1 : 0.5}>
                {selectedMod == EnumSelectedMod.hint && <ToolBarModal 
                    isOpen={true} 
                    onClose={() => setSelectedMod(EnumSelectedMod.none)}
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