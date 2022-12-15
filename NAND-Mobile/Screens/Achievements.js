import React, { useState } from "react";
import { Image, HStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View, CloseIcon} from "native-base";
import { StyleSheet } from 'react-native';

export const AchievementsScreen = ({route, navigation}) => {

    const GameJSON = {
        "Player": {
            "Levels": {
                "Completed": 13
            }
        },
        "Levels": 75        
    }

    const AchievementsJSON = {
        "Achievements": {
            1: {
                "name": "Getting Started",
                "desc": "Beat level 1",
                "prereq": "TO DO",
                "status": true,
            },
            2: {
                "name": "Sticking to it",
                "desc": "Beat Level 2",
                "prereq": "TO DO",
                "status": false,
            },
            3: {
                "name": "Dedicated",
                "desc": "Beat 50 levels",
                "prereq": "TO DO",
                "status": true
            }

        }
    }

    const [completed, setCompleted] = useState(() => {
        // TO DO code to calculate percent completed
        // player stats: completed levels / total levels 
        const percentCompleted = GameJSON["Player"]["Levels"]["Completed"] / GameJSON["Levels"]
        return Math.round(percentCompleted * 100)
    })

    /*
    Achievements:
        1:
            name: "Beat level 1"
            prereq: TO DO: figure it out
            status:
        2: 
            name:
            prereq:
            status:
        3:
            name:
            prereq:
            status:

    */

    function showAchievements(id){

        if (AchievementsJSON["Achievements"][id]["status"] === false) {
            return (
                <Box key={id} style={styles.box}>
                    <CloseIcon size="7" mt="0.5" color="red.500" marginRight="6"/> 
                    <Container>
                        <Text style={styles.locked}>{AchievementsJSON["Achievements"][id]["name"]}</Text>
                        <Text style={styles.achievementDesc_locked}>{AchievementsJSON["Achievements"][id]["desc"]}</Text>
                    </Container>
                </Box>) 
        }

        return (
        <Box key={id} style={styles.box}>
            <CheckIcon size="7" mt="0.5" color="emerald.500" marginRight="6"/>
            <Container>
                <Text style={styles.unlocked}>{AchievementsJSON["Achievements"][id]["name"]}</Text>
                <Text style={styles.achievementDesc}>{AchievementsJSON["Achievements"][id]["desc"]}</Text>
            </Container>
        </Box>)
    }

    return (
        <NativeBaseProvider>
            <Center style={styles.container}>
                    <Text style={styles.textTitle}>{completed}%</Text>
                    {Object.keys(AchievementsJSON["Achievements"]).map((id) => (showAchievements(id)))}
            </Center>
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
