import { FlatList, Text, View } from 'react-native'
import React from "react";

/* Specs Table

--Input--|--Output--
a  |  b  |  
---------------------
0  | 0   | 1

*/
/* 
[{
    input: {
        a: string,
        b: string,
        c: string,
        d: string,
    },
    output: {
        x: string,
        y, string
    },
    
}]
*/

export const TableOne = ({data}) => {
    
    const item = ({ item }) => (
        <View style={{flexDirection: "row"}}>
            <View style={{width: 50, borderRadius: 1}}>
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