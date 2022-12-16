import { FlatList, Text, View } from 'react-native'
import React from "react";

/* Specs Table
data = [[0, 0, 1], [0, 1, 1]]

--Input--|--Output--
a  |  b  |  
0  | 0   | 1
*/
/*    const data = [
            {a: 0, b: 0, output: 1},
            {a: 0, b: 1, output: 1}
        ] */

export const TableOne = ({data}) => {
    
    const item = ({ item }) => (
        <View style={{flexDirection: "row"}}>
            <View style={{width: 50}}>
                <Text style={{fontSize: 16, textAlign: "center"}}>{item.a}</Text>
            </View>
            <View style={{width: 50}}>
                <Text style={{fontSize: 16, textAlign: "center"}}>{item.b}</Text>
            </View>
            <View style={{width: 50}}>
                <Text style={{fontSize: 16, textAlign: "center"}}>{item.output}</Text>
            </View>
        </View>
    )

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <FlatList data={data} renderItem={item}/>
        </View>
    )
}