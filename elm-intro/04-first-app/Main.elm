module Main exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)

-- model 

type alias Model = 
    { calories : Int
    , input : Int
    , error : Maybe String 
    } 

initModel : Model
initModel = 
    { calories = 0
    , input = 0
    , error = Nothing
    }

-- update

type Msg
    = AddCalorie
    | Input String
    | Clear 

update : Msg -> Model -> Model 
update msg model = 
    case msg of 
        AddCalorie -> 
            { model 
                | calories = model.calories + model.input
            }
        Input val -> 
            case String.toInt val of 
                Ok input -> 
                    { model 
                        | input = input
                        , error = Nothing
                    }
                Err err -> 
                    { model 
                        | input = 0
                        , error = Just err 
                    }
        Clear ->
            initModel
    
-- view 

view : Model -> Html Msg 
view model = 
    div []
        [ h3 []
            [ text ("Total Calories: " ++ (toString model.calories)) ]
        , input
            [ type_ "text"
            , onInput Input
            , value
                (if model.input == 0 then 
                    ""
                else 
                    toString model.input
                )
            ]
            []
        , div [] [ text (Maybe.withDefault "" model.error) ]
        , button
            [ type_ "button"
            , onClick AddCalorie
            ]
            [text "Add"]
        , button
            [ type_ "button"
            , onClick Clear
            ]
            [text "Clear"]
        ]

-- main

main : Program Never Model Msg 
main = 
    beginnerProgram 
        { model = initModel 
        , update = update
        , view = view
        }