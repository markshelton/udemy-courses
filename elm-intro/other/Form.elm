module Form exposing (..)

import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (onInput)
import Result
import Maybe


main =
    Html.beginnerProgram { model = initModel, view = view, update = update }



-- MODEL


type alias Model =
    { email : String, password : String, passwordAgain : String }


initModel : Model
initModel =
    { email = "", password = "", passwordAgain = "" }



-- UPDATE


type Msg
    = Email String
    | Password String
    | PasswordAgain String


update : Msg -> Model -> Model
update msg model =
    case msg of
        Email email ->
            { model | email = email }

        Password password ->
            { model | password = password }

        PasswordAgain password ->
            { model | passwordAgain = password }



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ input [ type_ "text", placeholder "Email", onInput Email ] []
        , input [ type_ "text", placeholder "Password", onInput Password ] []
        , input [ type_ "text", placeholder "Re-enter Password", onInput PasswordAgain ] []
        , viewValidation model
        ]


viewValidation : Model -> Html Msg
viewValidation model =
    let
        ( color, message ) =
            case validation model of
                Ok _ ->
                    ( "green", "OK" )

                Err error ->
                    ( "red", error )
    in
        div [ style [ ( "color", color ) ] ] [ text message ]


validation : Model -> Result String (List Model)
validation model =
    sequenceResult <| List.map (validate model) rules


sequenceResult : List (Result a b) -> Result a (List b)
sequenceResult lst =
    case lst of
        x :: xs ->
            Result.andThen
                (\xval ->
                    Result.andThen
                        (\xsval ->
                            Ok (xval :: xsval)
                        )
                        (sequenceResult xs)
                )
                x

        [] ->
            Ok []


type alias Rule =
    ( Model -> Bool, String )


rules : List Rule
rules =
    [ ( (\model -> model.email /= ""), "Please enter an email." )
    , ( (\model -> model.password /= ""), "Please enter a password." )
    , ( (\model -> String.length model.password > 8), "Password is not long enough." )
    , ( (\model -> model.passwordAgain /= ""), "Please confirm your password." )
    , ( (\model -> model.password == model.passwordAgain), "Passwords do not match." )
    ]


validate : Model -> Rule -> Result String Model
validate model ( check, error ) =
    case check model of
        True ->
            Ok model

        False ->
            Err error
