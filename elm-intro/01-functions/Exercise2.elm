module Main exposing (..)

import Html

toUpperByLength : Int -> String -> String
toUpperByLength maxLength xs = 
    if String.length xs > maxLength then 
        String.toUpper xs 
    else 
        xs
            
main : Html.Html msg
main = 
    Html.text (toUpperByLength 10 "Mark Shon")