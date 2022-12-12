import { Image, HStack, NativeBaseProvider, extendTheme, Center, Button} from "native-base";

export const NAND_Splash = ({route, navigation}) => {
  
    
    return (
      <NativeBaseProvider>
        <Center marginTop={"50%"}>
            <Image source={require('../assets/icon.png')} style={{width: 100, height: 100, margin: 40}}/>
            <Button >
              Levels
            </Button>
        </Center>
      </NativeBaseProvider>
    )
  }