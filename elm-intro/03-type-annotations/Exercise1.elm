import Html 

cart =
    [ { name = "Lemon", qty = 1, freeQty = 0 }
    , { name = "Apple", qty = 5, freeQty = 0 }
    , { name = "Pear", qty = 10, freeQty = 0 }
    ]

calcFreeItem minQty freeQty item = 
    if item.freeQty == 0 && minQty > 0 then
        { item | freeQty = item.qty // minQty * freeQty }
    else 
        item 

calcFreeCart = 
    List.map ((calcFreeItem 10 3) >> (calcFreeItem 5 1))

main = 
    Html.text << toString << calcFreeCart <| cart
    