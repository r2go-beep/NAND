import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Image, Pressable, NativeBaseProvider, Flex, Box, Text, Center, Container, Stack} from "native-base";
import DropDownArrow from '../icons/DropDownArrow.png';


export const ProgressScreen = ({route, navigation}) => {
  
    const GameJSON =  {
         "Computer":{
           "Logic Gates":{
             "Nand": {
               "isCompleted": false,
               "logic": "NAND",
               "prereq": null
             },
             "Invert": {
              "isCompleted": false,
              "logic": "Invert",
              "prereq": null
            }
           },
           "Arithmetics":{
             "NAND": {
               "isCompleted": false,
               "logic": "NAND",
               "prereq": null
             }
           },
           "Switching":{
             "NAND": {
               "isCompleted": false,
               "logic": "NAND",
               "prereq": null
             }
           },
           "Arithmetic Logic Unit":{
             "NAND": {
               "isCompleted": false,
               "logic": "NAND",
               "prereq": null
             }
           },
           "Memory":{
             "NAND": {
               "isCompleted": false,
               "logic": "NAND",
               "prereq": null
             }
           },
           "Processor":{
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
    const [selectedSection, setSelectedSection] = useState("Logic Gates")//TODO: create function to find last non completed level

    function showSectionHead(Section){
        return (
          <Pressable style={styles.sectionContainer} key={Section} onPress={() => setSelectedSection(Section)}>
            <Container style={{width:"100%"}} flexDirection={"row"} >
                <Text style={styles.sectionText}>{Section}</Text>
                <Image style={{transform:[{rotate:'90deg'}], resizeMode:"contain", marginLeft:"auto"}} alt="" source={DropDownArrow} />
            </Container>
            {selectedSection == Section ? Object.keys(GameJSON["Computer"][Section]).map((CircuitName) => showSectionDropDown(CircuitName)) : null}
          </Pressable>
        )
    }

    function showSectionDropDown(CircuitName){
      return (
        <Box style={styles.box} key={CircuitName}>
            <Text style={{textAlign:"center"}}>{CircuitName}</Text>
        </Box>
      )
  }

    return (
      <NativeBaseProvider>
        <Container >
              {Object.keys(GameJSON["Computer"]).map((Section) => (showSectionHead(Section)) )}
        </Container>  
      </NativeBaseProvider>
    )
  }
  

  const styles = StyleSheet.create({
    
    sectionText: {
      fontWeight: "bold",
      fontSize: "22px",
    },
    sectionContainer:{
      marginTop:40,
      marginLeft:10,
      width:"100%",
      maxWidth:"100%",
    },
    box: {
      borderRadius: 5,
      marginTop: 5,
      backgroundColor: "#9BFFB1",
      width: "40%",
      height: 90,
      maxHeight: "40%",
      justifyContent: "center",
    }
  })
