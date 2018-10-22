module Main exposing (..)

import Html exposing (Html, button, div, text)
import Html.Events exposing (onClick)


main =
    Html.beginnerProgram
        { model = initModel
        , view = view
        , update = update
        }



-- MODEL


type alias Model =
    { counter : Int
    }


initModel : Model
initModel =
    { counter = 0
    }



-- UPDATE


type Msg
    = Increment
    | Decrement
    | Reset


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            { model
                | counter = model.counter + 1
            }

        Decrement ->
            { model
                | counter = model.counter - 1
            }

        Reset ->
            initModel



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ button [ onClick Decrement ] [ text "-" ]
        , div [] [ text (toString model.counter) ]
        , button [ onClick Increment ] [ text "+" ]
        , button [ onClick Reset ] [ text "Reset" ]
        ]
