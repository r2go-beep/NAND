import { FlatList, Text, View } from 'react-native'
import React from "react";
import { GetTruthHeaders } from '../GameData/LevelSelectLogic';

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

export const TableOne = ({ levelName }) => {

    function TableHeaders(headerName)
    {    
        return(
            <View style={{width: 50}}>
                <Text style={{fontSize: 16, textAlign: "center"}}>
                    {headerName}
                </Text>
            </View>
        )
    }
    
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
            <View style={{flexDirection: "row"}}>
                {GetTruthHeaders(levelName).map((headerName) => TableHeaders(headerName))}
            </View>
            <FlatList renderItem={item}/>
        </View>
    )
}