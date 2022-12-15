import React, { useState } from "react";
import { Image, HStack, ZStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon, Pressable, CircleIcon} from "native-base";
import { StyleSheet } from 'react-native';

export const LevelScreen = ({route, navigation}) => {

    const [selected, setSelected] = useState(1);

    return (
        <NativeBaseProvider>
            <Center>
                <Container style={styles.gameBox} />
                <Box alignSelf="center" style={styles.toolBox}>
                    <Pressable onPress={() => setSelected(0)} opacity={selected === 0 ? 1 : 0.5}>
                        <Center>
                            <CircleIcon />
                            <Text>Spec</Text>
                        </Center>
                    </Pressable>
                    <Pressable onPress={() => setSelected(1)} opacity={selected === 1 ? 1 : 0.5}>
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
                    <Pressable onPress={() => setSelected(3)} opacity={selected === 3 ? 1 : 0.5}>
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