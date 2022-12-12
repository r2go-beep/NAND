import React from "react";
import { Image, HStack, NativeBaseProvider, extendTheme, Box, Text, Center, Button, Container, Stack} from "native-base";

export const ProgressScreen = ({route, navigation}) => {
  
    const GameJSON =  {
         "Computer":{
           "Logic_Gates":{
             "NAND": {
               "isCompleted": false,
               "logic": "NAND",
               "prereq": null
             }
           },
           "Arithmetics":{
             "NAND": {
               "isCompleted": false,
               "logic": "NAND",
               "prereq": null
             }
           }
         }
     }

    /*
    Logic Gates:
        Nand:
        Invert
        And
    Arithmetics

    */

    function showBriefUserInfo(Section){
        return (
        <Box width="100%" key={Section} bg={"#729EA1"} style={{margin:5, borderRadius:10}}>
            <Text textAlign={"center"}>{Section}</Text>
        </Box>)
    }

    return (
      <NativeBaseProvider>
        <Container>
            <Text>Computer</Text>
            <Text>{Object.keys(GameJSON["Computer"]).map((Section) => (showBriefUserInfo(Section)) )}</Text>
        </Container>
        <Container>
            <Text>Switching</Text>
            <Text>{Object.keys(GameJSON["Computer"]).map((Section) => (showBriefUserInfo(Section)) )}</Text>
        </Container>      
      </NativeBaseProvider>
    )
  }