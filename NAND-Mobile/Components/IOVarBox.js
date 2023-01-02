import { Box, Container, View } from 'native-base'
import {  StyleSheet } from 'react-native'

export const IOBox = ({inputChars, align}) => {
    return(
        <View style={align == "top" ? styles.IOContainerTop : styles.IOContainerBottom}>
            {inputChars && inputChars.map((inputChar) =>
                <Box style={styles.IOBox} key={inputChar}>
                    {inputChar}
                </Box>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    IOBox: {
        marginHorizontal: 5,
        paddingHorizontal: 5,
        borderRadius: 45,
        borderWidth: 1,
        backgroundColor: "#FFFFFF",
        height: 20,
        marginTop: -10,
        marginBottom: -10
    },
    IOContainerBottom: {
        height: "auto",
        zIndex: 4,
        alignSelf: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        position: "absolute",
        bottom: 0,
        
    },
    IOContainerTop: {
        height: "auto",
        zIndex: 4,
        alignSelf: "center",
        flexDirection: "row",
        flexWrap: "nowrap",
        position: "absolute",
        top: 0,
    }
})