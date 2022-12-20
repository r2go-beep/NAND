import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Image, Pressable, NativeBaseProvider, Flex, Box, Text, Center, Container, Stack, Button} from "native-base";
import DropDownArrow from '../icons/DropDownArrow.png';
import { GetCatagories, GetLevelNamesFromCategory } from "../GameData/LevelSelectLogic";

export const ProgressScreen = ({route, navigation}) => {
  

    const [selectedSection, setSelectedSection] = useState(GetCatagories()[0])//TODO: create function to find last non completed level

    function showSectionHead(Section){
        return (
          <Pressable style={styles.sectionContainer} key={Section} onPress={() => setSelectedSection(Section)}>
            <Container style={{width:"100%"}} flexDirection={"row"} >
                <Text style={styles.sectionText}>{Section}</Text>
                <Image style={selectedSection == Section ? styles.dropDownArrow_down : styles.dropDownArrow_right} alt="" source={DropDownArrow} />
            </Container>
            {selectedSection == Section ? GetLevelNamesFromCategory(Section).map((LevelName) => showSectionDropDown(LevelName)) : null}
          </Pressable>
        )
    }

    function showSectionDropDown(LevelName){
      return (
        <Box style={styles.box} key={LevelName}>
            <Button style={styles.circuitText} onPress={() => navigation.push("LevelScreen",{"circuitName":LevelName})}>{LevelName}</Button>
        </Box>
      )
  }   

    return (
      <NativeBaseProvider>
        <Container >
          {GetCatagories().map((Section) => (showSectionHead(Section)) )}
        </Container>  
      </NativeBaseProvider>
    )
  }

  const styles = StyleSheet.create({
    circuitText: {
      fontWeight: "bold",
      fontSize: "18px",
      textAlign:"center",
      paddingVertical:20,
      justifyContent:"space-evenly",
    },
    sectionText: {
      paddingTop: 10,
      fontWeight: "bold",
      fontSize: "28px",
    },
    sectionContainer:{
      marginVertical:10,
      marginLeft:20,
      width:"100%",
      maxWidth:"100%",
    },
    box: {
      borderRadius: 5,
      marginVertical: 5,
      backgroundColor: "#9BFFB1",
      width: "40%",
      justifyContent: "center",
    },
    dropDownArrow_down: {
      transform:[{rotate:'90deg'}],
      resizeMode:"contain",
      marginLeft:"auto"
    },
    dropDownArrow_right: {
      resizeMode:"contain",
      marginLeft:"auto"
    }

  })
