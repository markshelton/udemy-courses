module Main exposing (..)

import Html 

wordCount : String -> Int
wordCount = 
    List.length << String.words

main : Html.Html msg
main = 
    Html.text << toString << wordCount <| "hello hi my name is mark"