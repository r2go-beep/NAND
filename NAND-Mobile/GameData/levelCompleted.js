import * as PlayerJSON from "./Player.json"
import * as GameJSON from "./Game.json"

export const checkLevelCompletion = (levelName) => {
    if (PlayerJSON["Player"]["Levels"]["completed"] > GameJSON["Game"]["Levels"][levelName.toUpperCase()]["prereq"]) {
        return true
    }

    return false
}