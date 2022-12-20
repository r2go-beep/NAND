import React, { useState } from "react";
import { Image, HStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon, ScrollView} from "native-base";
import { StyleSheet } from 'react-native';
import * as AchievementsJSON from "../GameData/Game.json"
import * as PlayerJSON from "../GameData/Player.json"

export const AchievementsScreen = ({route, navigation}) => {

    const [percentCompleted, setPerecentCompleted] = useState(
        Math.round((PlayerJSON["Player"]["Levels"]["completed"] / Object.keys(AchievementsJSON["Game"]["Levels"]).length) * 100)
    ) 

    function showAchievements(elem){
        if (elem["requirement"] > PlayerJSON["Player"]["Levels"]["completed"]) {
            return (
                <Box key={elem["name"]} style={styles.box}>
                    <CloseIcon size="7" mt="0.5" color="red.500" marginRight="6"/> 
                    <Container>
                        <Text style={styles.locked}>{elem["name"]}</Text>
                        <Text style={styles.achievementDesc_locked}>{elem["desc"]}</Text>
                    </Container>
                </Box>) 
        }

        return (
        <Box key={elem["name"]} style={styles.box}>
            <CheckIcon size="7" mt="0.5" color="emerald.500" marginRight="6"/>
            <Container>
                <Text style={styles.unlocked}>{elem["name"]}</Text>
                <Text style={styles.achievementDesc}>{elem["desc"]}</Text>
            </Container>
        </Box>)
    }

    return (
        <NativeBaseProvider>
        <ScrollView>
            <Center style={styles.container}>
                    <Text style={styles.textTitle}>{percentCompleted}%</Text>
                    {AchievementsJSON["Game"]["Achievements"].map((elem) => showAchievements(elem))}
            </Center>
        </ScrollView>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 75
    },
    textTitle: {
        fontWeight: "100",
        fontSize: 102,
        paddingVertical: 80,
    },
    box: {
        backgroundColor: "#D9D9D9",
        borderRadius: 5,
        marginVertical: 5,
        width: "75%",
        padding: 10,
        display: "flex", 
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    locked: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#919191", 
    },
    unlocked: {
        fontSize: 18,
        fontWeight: "bold",
    },
    achievementDesc: {
        fontSize: 15
    },
    achievementDesc_locked: {
        fontSize: 15,
        color: "#a6a6a6"
    }
})