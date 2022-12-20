import * as GameJSON from './Game.json' 

/*
Purpose: To get all unique catagories from the levels
*/
export function GetCatagories () {
    return(
        [...new Set(
            Object.keys(GameJSON["Game"]["Levels"]).map(
                (LevelName) => GameJSON["Game"]["Levels"][LevelName]["Catagory"]
            )
        )]
    )
}