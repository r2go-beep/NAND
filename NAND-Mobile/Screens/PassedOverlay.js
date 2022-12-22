import React, { useEffect, useState } from "react";
import { NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon, Pressable, CircleIcon, Modal, CheckCircleIcon} from "native-base";
import { StyleSheet } from 'react-native';
import * as PlayerJSON from "../GameData/Player.json"
import * as GameJSON from "../GameData/Game.json"

const checkIfLevelCompleted = (name) => {
    if (PlayerJSON["Player"]["Levels"]["completed"] > GameJSON["Game"]["Levels"][name.toUpperCase()]["prereq"]) {
        return true
    }

    return false
}

export const PassedOverlay = ({name}) => {

    const [showModal, setShowModal] = useState(() => checkIfLevelCompleted(name))

    return (
        <Center>
            <Modal blurRadius={3} isOpen={showModal} size="xl" onClose={() => (setShowModal(false))}>
                <Modal.Content style={styles.modal}>
                    <Modal.Body>
                    <Center>
                        <Text style={styles.modalText}>
                            Correct
                        </Text>
                        <CheckIcon size="7" mt="0.5" color="emerald.500" marginRight="6"/>
                    </Center>
                    </Modal.Body>
                </Modal.Content>
            </Modal>
        </Center>
    )
}

const styles = StyleSheet.create({
    modal: {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
    modalText : { 
        fontSize: 56,
        fontWeight: "200",
        letterSpacing: "6em",
        textAlign: "center",
        paddingTop: 32,
        marginBottom: 32,
    }
})