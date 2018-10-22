module Main exposing (..)

import Html exposing (Html, text)

add : number -> number -> number
add a b =
    a + b

result : Bool
result = 
--  add (add 1 2) 3
--  add 1 2 |> add 3
    add 2 2 |> \a -> a % 2 == 0

counter = 
    0



main : Html msg
main = 
    text (toString result)