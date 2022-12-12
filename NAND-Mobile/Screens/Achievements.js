import React, { useState } from "react";
import { Image, HStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack} from "native-base";

export const AchievementsScreen = ({route, navigation}) => {

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
        return (
        <Box width="100%" key={id} bg={"#729EA1"} style={{margin:5, borderRadius:10}}>
            <Text textAlign={"center"}>{id}</Text>
        </Box>)
    }

    return (
        <NativeBaseProvider>
            <Container>
                <Text>{completed}</Text>
                <Text>{Object.keys(AchievementsJSON["Achievements"]).map((id) => (showAchievements(id)))}</Text>
            </Container>
        </NativeBaseProvider>
    )
}
