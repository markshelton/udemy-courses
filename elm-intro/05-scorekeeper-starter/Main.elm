
-- model

type alias Model = 
    { players: List Player 
    , playerName: String
    , playerId: Maybe Int 
    , plays: List Play 
    }

type alias Player = 
    { id: Int 
    , name: String 
    , points: Int 
    }

type alias Play = 
    { id: Int 
    , playerId: Int 
    , name: String 
    , points: Int 
    }

initModel : Model
initModel = 
    { players = []
    , playerName = ""
    , playerId = Nothing
    , plays = []
    }

-- update

type Msg
    = Edit
    | Input String
    | Clear 

update : Msg -> Model -> Model 
update msg model = 
    case msg of 

-- view



-- main

main : Program Never Model Msg 
main = 
    beginnerProgram 
        { model = initModel 
        , update = update
        , view = view
        }