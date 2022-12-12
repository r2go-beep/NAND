import { HStack, NativeBaseProvider, extendTheme, Center, Button } from "native-base";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAND_Splash } from "./Screens/NAND_Splash";
import { StatusBar } from 'expo-status-bar';
import React from 'react';


const NavStack = createNativeStackNavigator();

const Screens = (props) => {
  return (
  <NavStack.Navigator  
      screenOptions={{
          headerBackTitleVisible: false
        }}>

        <NavStack.Screen 
          name="NAND_Splash"
          component = {NAND_Splash}
        />
        
  </NavStack.Navigator>
  )
}

export default function App() {
  return (
        <NativeBaseProvider styles={{fontFamily:'Plus-Jakarta-Sans'}}>
             <NavigationContainer>
              <Screens />
                
            </NavigationContainer>
        </NativeBaseProvider>
  );
}