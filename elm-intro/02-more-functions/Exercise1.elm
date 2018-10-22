module Main exposing (..)

import Html 

(~=) : String -> String -> Bool
(~=) a b = case (String.uncons a, String.uncons b) of
    (Nothing, _) -> False
    (_, Nothing) -> False
    (Just (x, xs), Just (y, ys)) -> x == y 

main : Html.Html msg
main = 
    Html.text << toString <| "hello" ~= "hi"