import Html 

type alias Item = 
    { name : String
    , qty : Int
    , freeQty : Int
    }

type alias Cart = 
    List Item

cart : Cart
cart =
    [ { name = "Lemon", qty = 1, freeQty = 0 }
    , { name = "Apple", qty = 5, freeQty = 0 }
    , { name = "Pear", qty = 10, freeQty = 0 }
    ]

calcFreeItem : Int -> Int -> Item -> Item
calcFreeItem minQty freeQty item = 
    if item.freeQty == 0 && minQty > 0 then
        { item | freeQty = item.qty // minQty * freeQty }
    else 
        item 

calcFreeCart : Cart -> Cart
calcFreeCart = 
    List.map ((calcFreeItem 10 3) >> (calcFreeItem 5 1))

main : Html.Html msg
main = 
    Html.text << toString << calcFreeCart <| cart
    