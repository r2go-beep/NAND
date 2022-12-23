import * as GameJSON from './Game.json' 

/*
Purpose: To get all unique catagories from the levels
*/
export function GetCatagories () {
    return(
        [...new Set(
            Object.keys(GameJSON["Game"]["Levels"]).map(
                (LevelName) => GameJSON["Game"]["Levels"][LevelName]["Category"]
            )
        )]
    )
}

export function GetLevelNamesFromCategory(Category) {
    return(
        [...new Set(
            Object.keys(GameJSON["Game"]["Levels"]).map(
                (LevelName) => (GameJSON["Game"]["Levels"][LevelName]["Category"] == Category ? GameJSON["Game"]["Levels"][LevelName]["Local_Name"] : null)
            )
        )]
    )
}

export function GetLevelData(LevelName) {
    return(
        GameJSON["Game"]["Levels"][LevelName]
    )
}