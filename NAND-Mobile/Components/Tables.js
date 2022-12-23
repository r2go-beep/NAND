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

export const TableOne = ({ TruthTable }) => {

    function TableHeader(headerName){   
        return( 
            <View style={{flex: 1, justifyContent: "center", alignItems: "center", borderRightWidth:0.5, borderLeftWidth:0.5}} key={headerName}>
                <Text style={{fontSize: 16, textAlign: "center"}}>
                    {headerName}
                </Text>
                <View style={{flexDirection: "row"}}>
                    {Object.keys(TruthTable[0][headerName]).map((ioName) => TableHeader2(ioName, headerName))}
                </View>
            </View>
        )
    }

    function TableHeader2(ioName, headerName){    
        return( 
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}} key={ioName}>
                <View style={{borderBottomWidth: 1, width: "100%"}}>
                    <Text style={{fontSize: 16, textAlign: "center"}}>
                        {ioName}
                    </Text>
                </View>
                {TruthTable.map((obj) => TableData(obj[headerName][ioName]))}
            </View>
        )
    }

    function TableData(dat){
        return(
            <Text style={{fontSize: 16}}>
                {dat}
            </Text>
        )
    }

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <View style={{flexDirection: "row"}}>
                {Object.keys(TruthTable[0]).map((headerName) => TableHeader(headerName))}
            </View>
        </View>
    )
}