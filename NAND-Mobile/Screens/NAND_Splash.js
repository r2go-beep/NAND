import { Image, HStack, NativeBaseProvider, extendTheme, Center, Button, Text, Container} from "native-base";
import { StyleSheet, ImageBackground } from 'react-native';
import backgroundImage from '../ImageComponents/LOGO.png';

export const NAND_Splash = ({route, navigation}) => {
  
    return (
      <NativeBaseProvider>
        <ImageBackground source={backgroundImage} resizeMode="contain" style={styles.container}>
          <Center>
            <Text style={styles.textTitle}>NAND</Text>
              <Button onPress={() => navigation.push("ProgressScreen")} style={styles.button}>
                <Text style={styles.textNormal}>Levels</Text>
              </Button>
              <Button onPress={() => navigation.push("AchievementsScreen")} style={styles.button}>
                <Text style={styles.textNormal}>Achievements</Text>
              </Button>
              <Button onPress={() => navigation.push("ProgressScreen")} style={styles.button}>
                <Text style={styles.textNormal}>Donate</Text>
              </Button>
            </Center>
        </ImageBackground>

      </NativeBaseProvider>
    )
  }

  const styles = StyleSheet.create({
    button: {
      width: "40%",
      margin: 20,
      borderRadius: 5,
      backgroundColor: "#A0A0A0",
      color: "#000000",
    },
    textNormal: {
      fontWeight: "bold",
      fontSize: "20px",
    },
    textTitle: {
      paddingVertical: 80,
      fontWeight: "100",
      fontSize: 102,

    },
    container:{
      height: "100%",
      width: "100%",
      maxWidth: "100%",
      justifyContent: "center",
      textAlign: "center",
    }
  })
