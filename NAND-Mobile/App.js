import { HStack, NativeBaseProvider, extendTheme, Center, Button } from "native-base";
import { NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAND_Splash } from "./Screens/NAND_Splash";
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ProgressScreen } from "./Screens/ProgressScreen";
import { AchievementsScreen } from "./Screens/Achievements";
import { LevelScreen } from "./Screens/LevelScreen";

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
          options = {{
            title: null, 
            headerTransparent: true, 
            headerBackVisible: true}}
        />

        <NavStack.Screen 
          name="ProgressScreen"
          component={ProgressScreen}
          options={{title: "Levels", 
          headerRight: () => (
            <Button title="Settings" onPress={() => alert('Settings!')} />
          )}}
        />      

        <NavStack.Screen 
          name="AchievementsScreen"
          component={AchievementsScreen}
          options={{title: "Achievements"}}
        />

        <NavStack.Screen 
          name="LevelScreen"
          component={LevelScreen}
          options={({route}) => ({title: `Level: ${route.params.circuitName}`})}
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