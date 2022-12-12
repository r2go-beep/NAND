import React, { useState } from "react";
import { Image, HStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack, CheckIcon, View} from "native-base";

export const AchievementsScreen = ({route, navigation}) => {

    const AchievementsJSON = {
        "Achievements": {
            1: {
                "name": "Beat Level 1",
                "prereq": "TO DO",
                "status": true,
            },
            2: {
                "name": "Beat Level 2",
                "prereq": "TO DO",
                "status": false,
            }

        }
    }

    const [completed, setCompleted] = useState(() => {
        // TO DO code to calculate percent completed
        // player stats: completed levels / total levels 
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
            return
        }

        return (
        <Box width="100%" key={id} bg={"#D9D9D9"} style={{margin:5, borderRadius:10, flexDirection: "row", justifyContent: "center"}}>
            <CheckIcon flex={1} size="5" mt="0.5" color="emerald.500"/>
            <Text flex={2} paddingLeft={10}>{AchievementsJSON["Achievements"][id]["name"]}</Text>
        </Box>)
    }

    return (
        <NativeBaseProvider>
            <View alignItems={"center"}>
                <Container>
                    <Text>{completed}</Text>
                    <Text>{Object.keys(AchievementsJSON["Achievements"]).map((id) => (showAchievements(id)))}</Text>
                </Container>
            </View>
        </NativeBaseProvider>
    )
}
