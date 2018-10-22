
import Html 

type Action = AddPlayer String | Score Int Int 

msg = AddPlayer "James"

act : Action -> String
act msg = case msg of 
    AddPlayer name -> 
        "Add player " 
        ++ name
    Score id points -> 
        "Player id " 
        ++ (toString id) 
        ++ " scored " 
        ++ (toString points)

type alias Item = 
    { name : String
    , price : Float
    , qty : Int
    , discounted : Bool
    }

type alias Cart = 
    List Item

cart : Cart
cart = 
    [ { name = "Lemon", price = 0.5, qty = 1, discounted = False }
    , { name = "Apple", price = 1, qty = 5, discounted = False }
    , { name = "Pear", price = 2.5, qty = 10, discounted = False }
    ]

discount : Int -> Float -> Item -> Item
discount minQuantity discountPercent item = 
    if not item.discounted && item.qty >= minQuantity then 
        { item 
            | price = item.price * (1.0 - discountPercent)
            , discounted = True 
        }
    else
        item 

discountCart : Cart -> Cart 
discountCart = 
    List.map ((discount 10 0.3) >> (discount 5 0.2))

main : Html.Html msg
main = 
    Html.text << toString <| discountCart cart
